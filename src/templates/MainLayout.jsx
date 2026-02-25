"use client";

import Header from "@/components/organism/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-4">{children}</main>
    </div>
  );
}
