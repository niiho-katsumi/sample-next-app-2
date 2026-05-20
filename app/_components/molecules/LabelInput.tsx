import type { ComponentProps } from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

type Props = {
  label: string;
} & ComponentProps<"input">;

export default function LabelInput({ label, ...inputProps }: Props) {
  return (
    <div className="flex justify-between items-center mb-6">
      <Label label={label} />
      <div className="w-full">
        <Input {...inputProps} />
      </div>
    </div>
  );
}
