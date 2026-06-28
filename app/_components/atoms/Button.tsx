"use client";
import type { ComponentProps } from "react";

type Variant = "default" | "secondary" | "update" | "cancel";

type Props = {
  variant: Variant;
  isSubmitting: boolean;
  text: string;
} & ComponentProps<"button">;

export default function Button({
  variant,
  isSubmitting,
  text,
  ...buttonProps
}: Props) {
  return (
    <button
      className={`${variant === "default" ? "bg-gray-800 text-white" : variant === "secondary" ? "bg-gray-200 text-black" : variant === "update" ? "bg-blue-700 text-white" : "bg-red-700 text-white"} font-bold py-2 px-4 rounded-lg`}
      {...buttonProps}
    >
      {isSubmitting ? "送信中" : `${text}`}
    </button>
  );
}
