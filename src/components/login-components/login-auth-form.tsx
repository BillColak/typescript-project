import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {FormEvent, useState} from "react";
import {Loader2, LucideProps} from "lucide-react";
import Link from "next/link";
import {UserAuthFormProps} from "@/components/login-components/auth-page-component";

export const Google = (props: LucideProps) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
    />
  </svg>
)


export function LoginAuthForm({className, setAuthStatus}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    // setIsLoading(true);
  }

  return (
    <div className={cn("grid gap-6", className)}>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login
        </p>
      </div>
      <form onSubmit={handleSignIn}>
        <div className="grid gap-2">
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                required
                className="border border-muted"
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                required
                className="border border-muted"
                id="password"
                placeholder="password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
              )}
              Sign In
            </Button>
          </div>

        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"/>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div>
        <Button variant="outline" disabled={isLoading}
                className={"bg-background text-foreground hover:bg-accent w-full"}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
          ) : (
            <Google className="mr-2 h-4 w-4"/>
          )}{" "}
          Google
        </Button>
        <div className="mt-4 text-center text-sm flex gap-2 justify-center cursor-pointer text-muted-foreground">
          Don&apos;t have an account?{" "}
          <p onClick={() => setAuthStatus("signup")}
             className="underline hover:text-primary">
            Sign up
          </p>
        </div>
      </div>
    </div>
  )
}
