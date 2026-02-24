"use client";

import Button from "@/components/atoms/Button";
import {useTheme} from "@/context/ThemeContext";

export default function ThemeToggle() {
  const {dark, toggleTheme} = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {dark ? "☀ Light" : "🌙 Dark"}
    </Button>
  );
}
