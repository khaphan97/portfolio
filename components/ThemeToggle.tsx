"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "dark" | "light";

/** Key used to persist the visitor's theme choice. */
const STORAGE_KEY = "theme";

function themeFromDocument(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/**
 * Button that switches between the light and dark themes.
 *
 * The active theme lives as `data-theme` on <html>, set by an inline script in
 * the root layout before paint to avoid a flash. The initial React state is
 * always "dark" so the server and first client render agree; the effect then
 * syncs it with whatever the script applied.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(themeFromDocument());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures (e.g. private browsing); theme still applies.
    }
    setTheme(next);
  };

  const nextLabel = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${nextLabel} mode`}
      aria-pressed={theme === "light"}
      title={`Switch to ${nextLabel} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}