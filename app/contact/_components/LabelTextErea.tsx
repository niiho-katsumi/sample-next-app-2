"use client";
import Label from "@/app/(_shared)/_components/atoms/Label";
import TextArea from "@/app/(_shared)/_components/atoms/TextArea";
import type { ComponentProps } from "react";


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
