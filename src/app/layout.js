// "use client";
import "./globals.css";
import { GlobalStateProvider } from "@/imports";

export default function RootLayout({ children }) {
  return (
    <GlobalStateProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </GlobalStateProvider>
  );
}
