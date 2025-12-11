// components/icons/Minimize.tsx
import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  className?: string;
};

export default function MinimizeIcon({ width = 16, height = 16, stroke = "currentColor", className = "" }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Example path — replace with your path(s) */}
      <path d="M2.66667 9.33333H6.66667M6.66667 9.33333V13.3333M6.66667 9.33333L2 14M13.3333 6.66667H9.33333M9.33333 6.66667V2.66667M9.33333 6.66667L14 2" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
