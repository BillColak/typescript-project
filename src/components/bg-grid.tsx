"use client";

import React from "react";
import {cn} from "@/lib/utils";

export function BGGrid({children, className}: { children?: React.ReactNode, className?: string }) {
  return (
    <div className={cn("min-h-screen w-full relative", className)}>
      {children}
      <div
        className="fixed inset-0 z-[-1] bg-transparent h-screen w-screen" // bg-gradient-to-b from-muted to-background
        style={{backgroundImage: "linear-gradient(hsl(var(--muted)), hsl(var(--background)))",}}
      >
        <div className="w-full h-full " // bg-[length:50px_50px]
             style={{
               backgroundSize: "50px 50px",
               backgroundImage:
                 "linear-gradient(0deg, transparent 24%, hsl(var(--muted)/80%) 25%, hsl(var(--muted)/80%) 26%, transparent 27%, transparent 74%, hsl(var(--muted)/80%) 75%, hsl(var(--muted)/80%) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--muted)/80%) 25%, hsl(var(--muted)/80%) 26%, transparent 27%, transparent 74%, hsl(var(--muted)/80%) 75%, hsl(var(--muted)/80%) 76%, transparent 77%, transparent)",
             }}
        />
      </div>
    </div>
  );
}

