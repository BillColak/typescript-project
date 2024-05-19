import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import * as React from "react";
import {UserAuthFormProps} from "@/components/login-components/auth-page-component";
import {cn} from "@/lib/utils";

export function SignUpAuthForm({className, ...props}: UserAuthFormProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [lastName, setLastName] = React.useState("")
  const [firstName, setFirstName] = React.useState("")
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
  }
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create an account
        </p>
      </div>
      <form onSubmit={handleSignIn} className="space-y-4">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input
              id="first-name"
              placeholder="Max"
              className="border border-muted"
              required
              autoComplete="given-name"
              autoCorrect="off"
              autoCapitalize="words"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input
              id="last-name"
              placeholder="Mustermann"
              className="border border-muted"
              required
              autoComplete="family-name"
              autoCorrect="off"
              autoCapitalize="words"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-2">
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
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
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
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <Button variant="outline" className="w-full">
          Sign up with Google
        </Button>
        <div className="mt-4 text-center text-sm flex gap-2 justify-center cursor-pointer text-muted-foreground">
          Already have an account?{" "}
          <p onClick={() => props.setAuthStatus && props.setAuthStatus("login")}
            className="underline hover:text-primary ">
            Sign in
          </p>
        </div>
      </form>
    </div>
  )
}
