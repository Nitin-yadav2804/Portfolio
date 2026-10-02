import { useEffect, useState } from "react";
export function useTheme() {
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme || "light",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#0B1120" : "#F8FAFC";
  }, [theme]);
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const change = () => {
      try {
        if (localStorage.getItem("portfolio-theme")) return;
      } catch {}
      setTheme(media.matches ? "dark" : "light");
    };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {}
    setTheme(next);
  }
  return { theme, toggleTheme };
}
