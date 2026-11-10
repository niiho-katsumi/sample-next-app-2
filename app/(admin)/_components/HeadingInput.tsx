import { ComponentProps } from "react";

type Props = {
  heading: string;
  htmlFor: string;
} & ComponentProps<"input">;

export default function HeadingInput({ heading,htmlFor, ...inputProps }: Props) {
  return (
    <div className="mt-2">
      <label htmlFor={htmlFor} className="text-gray-700 text-xs">
        {heading}
      </label>
      <input
        className="border border-gray-200 rounded-sm py-2 px-2 w-full mt-1"
        {...inputProps}
      />
    </div>
  );
}
