import type { ComponentProps } from "react";
import Label from "../atoms/Label";
import TextArea from "../atoms/TextArea";

type Props = {
  label: string;
} & ComponentProps<"textarea">;

export default function LabelTextErea({ label, ...textAreaProps }: Props) {
  return (
    <div className="flex justify-between items-center mb-6">
      <Label label={label} />
      <div className="w-full">
        <TextArea {...textAreaProps} />
      </div>
    </div>
  );
}
