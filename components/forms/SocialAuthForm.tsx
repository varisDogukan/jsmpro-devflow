"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

export default function SocialAuthForm() {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5 rounded-2";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign-in Failded",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src='/icons/github.svg'
          width={20}
          height={20}
          className='invert-colors mr-2.5 object-contain'
          alt='Github Logo'
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src='/icons/google.svg'
          width={20}
          height={20}
          className='mr-2.5 object-contain'
          alt='Github Logo'
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
}
