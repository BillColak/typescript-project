import React from 'react';
import {LoginAuthForm} from "./login-auth-form";
import Image from 'next/image';
import {MountainIcon} from "lucide-react";
import {SignUpAuthForm} from "@/components/login-components/sign-up-auth-form";

export interface UserAuthFormProps {
  className?: string
  status?: "login" | "signup"
  setAuthStatus: (status: "login" | "signup") => void
}



function AuthPageComponent() {
  // randomly pick a number between 1 and 4
  const r = Math.floor(Math.random() * 4) + 1;
  const img = `/images/img${r}.jpg`
  const [status, setStatus] = React.useState<UserAuthFormProps["status"]>("login")

  return (
    <section className="sm:container py-10 text-foreground">
      <div
        className=" relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 rounded-[1rem] overflow-hidden sm:border md:dark:border-muted  md:dark:bg-background">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-muted lg:flex ">
          <div className="absolute inset-0 bg-zinc-900 bg-[url('/img4.jpg')"/>
          <Image src={img} alt={'icon'} fill sizes={'100%'} className={'grayscale-[25%]'}/>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <div
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 cursor-pointer hover:underline"
            >
              <MountainIcon className="h-6 w-6"/>
              <span className="text-lg font-bold">Acme Inc</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {status === "login" ?
              <LoginAuthForm status={status} setAuthStatus={setStatus}/> :
              <SignUpAuthForm status={status} setAuthStatus={setStatus}/>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPageComponent;
