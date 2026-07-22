"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  // read after mount, not during render — the pre-paint script in layout.tsx
  // has already set the attribute, and reading it here would mismatch SSR
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-bs-theme") || "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
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
