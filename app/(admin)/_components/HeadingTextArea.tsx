import { ComponentProps } from "react";

type Props = {
  heading: string;
  htmlFor: string;
} & ComponentProps<"textarea">;

export default function HeadingTextArea({
  heading,
  htmlFor,
  ...textAreaProps
}: Props) {
  return (
    <div className="mt-2">
      <label htmlFor={htmlFor} className="text-gray-700 text-xs">
        {heading}
      </label>
      <textarea
        className="border border-gray-200 rounded-sm py-2 px-2 w-full mt-1"
        {...textAreaProps}
      />
    </div>
  );
}
