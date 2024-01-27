"use client";
import React, { Children } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

type GmailButtonProps = React.ComponentProps<"button">;

const GmailButton = React.forwardRef<HTMLButtonElement, GmailButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={twMerge(
        `w-full rounded-md bg-white py-2 text-[9px] flex items-center justify-center gap-4 font-semibold text-black`,
        `${className}`
      )}
      ref={ref}
      {...props}
    >
      <Image
        src="LogoGoogle.svg"
        alt="Logo Google"
        width={20}
        height={20}
        className=""
      />
      {props.children}
    </button>
  )
);

GmailButton.displayName = "button";

export default GmailButton;
