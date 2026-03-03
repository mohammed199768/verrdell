import styles from "./Hero.module.css";

export default function ImperialSeal(): JSX.Element {
  return (
    <div className={styles.seal} aria-hidden>
      <svg viewBox="0 0 600 600" fill="none" width="100%" height="100%">
        <circle cx="300" cy="300" r="290" stroke="rgba(141,74,100,0.16)" strokeWidth="1" />
        <circle cx="300" cy="300" r="265" stroke="rgba(216,184,196,0.12)" strokeWidth="0.5" />
        <circle
          cx="300"
          cy="300"
          r="250"
          stroke="rgba(171,110,131,0.18)"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />
        <circle cx="300" cy="300" r="235" stroke="rgba(245,233,239,0.08)" strokeWidth="1" />
        <g stroke="rgba(194,142,161,0.22)" strokeWidth="0.5">
          <line x1="300" y1="10" x2="300" y2="45" />
          <line x1="300" y1="555" x2="300" y2="590" />
          <line x1="10" y1="300" x2="45" y2="300" />
          <line x1="555" y1="300" x2="590" y2="300" />
          <line x1="90" y1="90" x2="112" y2="112" />
          <line x1="488" y1="90" x2="466" y2="112" />
          <line x1="90" y1="510" x2="112" y2="488" />
          <line x1="488" y1="510" x2="466" y2="488" />
        </g>
        <g fill="rgba(216,184,196,0.3)">
          <polygon points="300,14 304,22 300,30 296,22" />
          <polygon points="450,60 454,68 450,76 446,68" />
          <polygon points="540,150 544,158 540,166 536,158" />
          <polygon points="586,300 580,304 572,300 580,296" />
          <polygon points="540,450 536,442 540,434 544,442" />
          <polygon points="450,540 446,532 450,524 454,532" />
          <polygon points="300,586 296,578 300,570 304,578" />
          <polygon points="150,540 154,532 150,524 146,532" />
          <polygon points="60,450 64,442 60,434 56,442" />
          <polygon points="14,300 20,296 28,300 20,304" />
          <polygon points="60,150 56,158 60,166 64,158" />
          <polygon points="150,60 154,68 150,76 146,68" />
        </g>
      </svg>
    </div>
  );
}
