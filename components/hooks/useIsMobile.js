"use client";

import { useSyncExternalStore } from "react";

// matches Bootstrap's md breakpoint, so only one branch is ever in the DOM
const mq = () => window.matchMedia("(max-width: 767.98px)");

export default function useIsMobile() {
  return useSyncExternalStore(
    (onChange) => {
      const m = mq();
      m.addEventListener("change", onChange);
      return () => m.removeEventListener("change", onChange);
    },
    () => mq().matches,
    () => false // ponytail: SSR assumes desktop; mobile swaps in after hydration
  );
}
