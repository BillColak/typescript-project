import React from 'react';
import {UserAuthForm} from "./user-auth-form";
import Image from 'next/image';
import Link from "next/link";
import {MountainIcon} from "lucide-react";

function LoginPage() {
  // randomly pick a number between 1 and 4
  const r = Math.floor(Math.random() * 4) + 1;
  const img = `/images/img${r}.jpg`
  console.log(img)
  return (
    <section className="sm:container py-10 text-foreground">
      <div className=" relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 rounded-[1rem] overflow-hidden sm:border md:dark:border-muted  md:dark:bg-background">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-muted lg:flex ">
          <div className="absolute inset-0 bg-zinc-900 bg-[url('/img4.jpg')"/>
          <Image src={img} alt={'icon'} fill sizes={'100%'} className={'grayscale-[25%]'}/>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <div className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6" />
              <span className="text-lg font-bold">Acme Inc</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login
              </p>
            </div>
            <UserAuthForm/>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="#" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
