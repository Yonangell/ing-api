"use client";

import Button from "@/components/atoms/Button";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </Button>
  );
}
