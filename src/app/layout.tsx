import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-geist-sans", // Keeping variable name for compatibility
  weight: "400",
  subsets: ["latin"],
});

// Using the same font for mono to ensure consistent styling
const ubuntuMonoForCode = Ubuntu_Mono({
  variable: "--font-geist-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RUBELIUS",
  description: "The Next Gen Token",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuMono.variable} ${ubuntuMonoForCode.variable} antialiased`}
      >
        <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
          <Suspense>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}