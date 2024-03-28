import "@/app/globals.css";

import * as React from "react";
import type { Metadata, Viewport } from "next";

import { fontHeading, fontInter, fontUrbanist } from "@/config/fonts";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: "ATEC | Home",
  description: "Association of Tangail Ex-Cadets",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className="overflow-x-hidden overflow-y-scroll">
      <body
        className={cn(
          "w-full bg-background bg-gradient-to-r from-background to-pink-400/10 font-sans antialiased",
          fontInter.variable,
          fontUrbanist.variable,
          fontHeading.variable
        )}
      >
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
