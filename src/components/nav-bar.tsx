'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {SVGProps} from "react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {pages} from "@/lib/config";

export default function NavBar() {
  const path  = usePathname()
  const { setTheme , theme} = useTheme()
  return (
    <>
      <header className="w-full bg-white shadow-sm dark:bg-gray-950">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {pages.map((page) => (
              <Link
                key={page.title}
                className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", path === page.href ? 'text-primary' : '')}
                href={page.href}
                scroll={false}
              >
                {page.title}
              </Link>
            ))}
            <Button
              variant="ghost"
              className="w-fit"
              onClick={() => window.location.href = '/auth'}
            >
              Sign Out
            </Button>
            <Button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              variant="outline"
              size="icon"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
          <Button className="md:hidden" size="sm" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
    </>
  )
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
