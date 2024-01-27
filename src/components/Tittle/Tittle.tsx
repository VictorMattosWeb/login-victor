"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type TittleProps = React.ComponentProps<"h1">;

const Tittle = (props: TittleProps) => {
  return <h1 className={twMerge(`font-bold`)} {...props} />;
};

Tittle.displayName = "h1";

export default Tittle;
