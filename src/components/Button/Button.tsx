import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export type ButtonProps = React.ComponentProps<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          `w-full rounded-md bg-white py-2 font-semibold text-black`,
          `${className}`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
