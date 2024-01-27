import React from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "email", placeholder, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={twMerge(
          `bg-primary-3 w-full rounded-md border-primary-2 border-2 py-[9px] px-[8px] text-xs focus:ring-0 focus:border-primary-5 outline-none`,
          `${className}`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
