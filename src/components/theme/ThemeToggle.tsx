"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="w-fit p-2 rounded-md duration-200 text-pima"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Moon className="w-4 text-gray-900 dark:text-gray-100" />
      ) : (
        <Sun className="w-4 text-gray-900 dark:text-gray-100" />
      )}
    </button>
  );
}
