import "@/globals.css";

import { ThemeProvider } from "@/context/ThemeContext";
import MainLayout from "@/templates/MainLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="bg-blue-400 text-gray-900 dark:bg-neutral-900 dark:text-white">
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
