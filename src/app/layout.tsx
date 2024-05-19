import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {DataProvider} from "@/components/data-provider";
import {ThemeProvider} from "@/components/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import {BGGrid} from "@/components/bg-grid";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Role Based Auth App ",
  description: "Test Role Based Auth App",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <BGGrid>
        <TooltipProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </TooltipProvider>
      </BGGrid>
    </ThemeProvider>
    </body>
    </html>
  );
}
