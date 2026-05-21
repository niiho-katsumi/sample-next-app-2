"use client";
import Input from "@/app/(_shared)/_components/atoms/Input";
import Label from "@/app/(_shared)/_components/atoms/Label";
import type { ComponentProps } from "react";


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
