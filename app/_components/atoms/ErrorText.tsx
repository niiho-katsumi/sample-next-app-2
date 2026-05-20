import type { FieldError } from "react-hook-form";

type Props = {
  errorText?: string;
  error?: FieldError;
};

export default function ErrorText({ errorText, error }: Props) {
  return <>{error && <span className="text-red-500">{errorText}</span>}</>;
}
