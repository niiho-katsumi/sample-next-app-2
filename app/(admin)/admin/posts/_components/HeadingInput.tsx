import { ComponentProps } from "react";

type Props = {
  heading: string;
} & ComponentProps<"input">;

export default function HeadingInput({ heading, ...inputProps }: Props) {
  return (
    <div className="mt-2">
      <p className="text-gray-700 text-xs">{heading}</p>
      <input className="border border-gray-200 rounded-sm py-2 px-2 w-full mt-1" {...inputProps} />
    </div>
  );
}
