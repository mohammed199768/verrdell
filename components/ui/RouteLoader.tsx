"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./RouteLoader.module.css";

const MIN_VISIBLE_MS = 360;

function isInternalNavigation(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute("href");
  if (!href) return false;
  if (href.startsWith("#")) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return false;

  const samePath = url.pathname === window.location.pathname;
  const sameSearch = url.search === window.location.search;
  const sameHash = url.hash === window.location.hash;
  if (samePath && sameSearch && sameHash) return false;

  return true;
}

export default function RouteLoader(): JSX.Element {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const startedAtRef = useRef(0);
  const hideTimerRef = useRef<number | null>(null);

  const clearHideTimer = () => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const startLoader = useCallback(() => {
    if (isVisible) return;
    startedAtRef.current = Date.now();
    setIsVisible(true);
  }, [isVisible]);

  const stopLoader = useCallback(() => {
    if (!isVisible) return;
    const elapsed = Date.now() - startedAtRef.current;
    const delay = Math.max(0, MIN_VISIBLE_MS - elapsed);
    clearHideTimer();
    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
      hideTimerRef.current = null;
    }, delay);
  }, [isVisible]);

  useEffect(() => {
    stopLoader();
  }, [pathname, stopLoader]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      if (!target) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (!isInternalNavigation(anchor)) return;

      startLoader();
    };

    const onPopState = () => {
      startLoader();
    };

    document.addEventListener("click", onDocumentClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      window.removeEventListener("popstate", onPopState);
      clearHideTimer();
    };
  }, [startLoader]);

  if (!isVisible) return <></>;

  return (
    <div className={styles.overlay} role="status" aria-live="polite" aria-label="Loading next page">
      <div className={styles.center}>
        <div className={styles.logoWrap}>
          <Image src="/images/ezma.svg" alt="Verrdelle" fill className={styles.logo} priority={false} />
        </div>
        <p className={styles.text}>Loading your next ritual</p>
        <div className={styles.barTrack}>
          <span className={styles.bar} />
        </div>
      </div>
    </div>
  );
}
