import type { ComponentProps } from "react";

type Variant = "default" | "secondary";

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
      className={`${variant === "default" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} font-bold py-2 px-4 rounded-lg`}
      {...buttonProps}
    >
      {isSubmitting ? "送信中" : `${text}`}
    </button>
  );
}
