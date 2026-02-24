import "@/globals.css";

import { ThemeProvider } from "@/context/ThemeContext";
import MainLayout from "@/templates/MainLayout";

export const metadata = {
  title: "My Next.js App",
  description: "A simple Next.js application with theme toggle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="bg-gray-100 dark:bg-neutral-400 transition-colors">
        <ThemeProvider>
          <MainLayout>
            {children}
            </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
