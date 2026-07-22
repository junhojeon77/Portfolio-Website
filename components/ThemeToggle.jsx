"use client";

import { useSyncExternalStore } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

// the <html data-bs-theme> attribute is the source of truth — the pre-paint
// script in layout.tsx sets it before React exists, so subscribe to it rather
// than keeping a second copy in state
const subscribe = (onChange) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributeFilter: ["data-bs-theme"],
  });
  return () => observer.disconnect();
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.getAttribute("data-bs-theme") || "light",
    () => "light" // SSR has no attribute yet; the script fixes it before paint
  );

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="btn btn-link nav-link fs-8 border-0"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <FaSun size={20} aria-hidden="true" />
      ) : (
        <FaMoon size={20} aria-hidden="true" />
      )}
    </button>
  );
}
