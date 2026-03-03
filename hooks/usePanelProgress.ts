"use client";

import { create } from "zustand";

interface PanelProgressStore {
  isLoaded: boolean;
  setLoaded: (value: boolean) => void;
}

export const usePanelProgress = create<PanelProgressStore>((set) => ({
  isLoaded: false,
  setLoaded: (value) => set({ isLoaded: value }),
}));
