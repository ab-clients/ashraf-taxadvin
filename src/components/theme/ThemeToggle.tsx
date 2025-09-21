"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "../ui/switch";

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
        <span className="flex items-center align-middle space-x-2 gap-2 text-gray-900 dark:text-gray-100">
          <Moon className="w-4" /> Dark Mode
        </span>
      ) : (
        <span className="flex items-center align-middle space-x-2 gap-2 text-gray-900 dark:text-gray-100">
          <Sun className="w-4" /> Light Mode
        </span>
      )}
    </button>
  );
}
