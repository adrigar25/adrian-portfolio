import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const updateTheme = () => {
      switch (theme) {
        case "light":
          document.documentElement.classList.remove("dark");
          break;
        case "dark":
          document.documentElement.classList.add("dark");
          break;
        case "system":
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
          break;
      }
    };
    updateTheme();
  }, [theme]);

  return { theme, setTheme };
}
