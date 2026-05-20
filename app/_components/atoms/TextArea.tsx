import type { ComponentProps } from "react";

export default function TextArea(props: ComponentProps<"textarea">) {
  return (
    <textarea
      className="resize-none border border-gray-300 rounded-lg p-4 w-full"
      {...props}
    ></textarea>
  );
}
