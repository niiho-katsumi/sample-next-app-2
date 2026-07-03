import { Category } from "@/app/_types/type";
import { ComponentProps, useState } from "react";

type Props = {
  heading: string;
  values: Category[];
  selectedIds: number[];
  onToggle: (id: number) => void;
};

export default function HeadingCategoryButtons({
  heading,
  values,
  selectedIds,
  onToggle,
}: Props) {
  return (
    <div className="mt-2">
      <p className="text-gray-700 text-xs">{heading}</p>
      <div className="flex gap-1 mt-1">
        {values.map((value) => (
          <button
            type="button"
            className={`${selectedIds.includes(value.id) ? "bg-blue-500 text-white " : "bg-white border border-gray-500"} rounded-2xl py-1 px-2`}
            key={value.id}
            onClick={() => onToggle(value.id)}
          >
            {value.name}
          </button>
        ))}
      </div>
    </div>
  );
}
