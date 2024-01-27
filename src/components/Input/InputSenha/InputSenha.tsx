"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useState } from "react";

export type InputSenhaProps = React.ComponentProps<"input">;

const InputSenha = React.forwardRef<HTMLInputElement, InputSenhaProps>(
  ({ className, type = "password", placeholder, ...props }, ref) => {
    const [showing, setShowing] = useState(false);
    return (
      <div className="relative">
        <input
          type={showing ? "text" : "password"}
          placeholder={placeholder}
          className={twMerge(
            `bg-primary-3 
              w-full rounded-md
            border-primary-2
              border-2 py-[9px] px-[8px] text-xs
              focus:border-primary-5 focus:ring-0   
              outline-none`,
            `${className}`
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          className="p-2 absolute right-0 top-1/2 -translate-y-1/2"
          onClick={() => setShowing((prevState) => !prevState)}
        >
          {showing ? (
            <FaEye className="w-4 h-4" />
          ) : (
            <FaEyeSlash className="w-4 h-4" />
          )}
        </button>
      </div>
    );
  }
);

InputSenha.displayName = "Input";

export default InputSenha;
