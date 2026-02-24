"use client";

import Header from "@/components/organism/Header";
import { ThemeProvider } from "@/context/ThemeContext";

export default function MainLayout({ children}) {
  return (
    <>
    <Header/>
    <main className="max-w-6xl mx-auto p-4">
      {children}
      </main>
    </>
  );
}