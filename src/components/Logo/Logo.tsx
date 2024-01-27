"use client";
import React from "react";
import Image from "next/image";

type LogoOther = "one" | "two";

interface LogoProps {
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  typeLogo: LogoOther;
}

const Logo = ({
  alt = "Logo",
  width = 50,
  height = 50,
  className,
  typeLogo,
}: LogoProps) => {
  return (
    <Image
      src={typeLogo === "one" ? "typeLogo.svg" : "Logo.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;
