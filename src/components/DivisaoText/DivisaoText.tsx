"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export type DivTextProps = React.ComponentProps<"div">;

const DivText = React.forwardRef<HTMLDivElement, DivTextProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="inline-flex items-center gap-3">
        <div className="border-b w-full bg-primary-4"></div>
        <div className={twMerge(`font-semibold`, className)} {...props}></div>
        <div className="border-b w-full bg-primary-4"></div>
      </div>
    );
  }
);

DivText.displayName = "div";

export default DivText;
