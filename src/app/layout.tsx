import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/providers/Providers";
import { FloatingChatButton } from "./components/virtualMe";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Vitae",
  description: "A Creative Curriculum Vitae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking script: runs before first paint.
            On repeat visits, sets data-skip-animations on <html> so CSS
            immediately cancels all load animations before the browser paints. */}
        <script dangerouslySetInnerHTML={{
          __html: `if(sessionStorage.getItem('nav-animated')){document.documentElement.setAttribute('data-skip-animations','')}else{sessionStorage.setItem('nav-animated','true')}`
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Limelight&family=Notable&family=Young+Serif&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <FloatingChatButton />
      </body>
    </html>
  );
}
