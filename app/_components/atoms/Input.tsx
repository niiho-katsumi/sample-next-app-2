import type { ComponentProps } from "react";

export default function Input(inputProps: ComponentProps<"input">) {
  return (
    <div className="w-full">
      <input
        className="border border-gray-300 rounded-lg p-4 w-full"
        {...inputProps}
      />
    </div>
  );
}
