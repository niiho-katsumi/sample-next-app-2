"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type contactSchemaType,
  contactSchema,
} from "../../_schemas/contact.schema";
import Button from "@/app/_components/atoms/Button";
import ErrorText from "@/app/_components/atoms/ErrorText";
import LabelInput from "./LabelInput";
import LabelTextErea from "./LabelTextErea";

type Props = {
  onSubmit: (data: contactSchemaType) => void;
};

export default function ContactForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<contactSchemaType>({
    mode: "onTouched",
    resolver: zodResolver(contactSchema),
  });

  const onSubmitWithReset = async (data: contactSchemaType) => {
    await onSubmit(data);
    reset();
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-10">問い合わせフォーム</h1>
      <form onSubmit={handleSubmit(onSubmitWithReset)}>
        <LabelInput
          type="text"
          id="name"
          label={"お名前"}
          {...register("name")}
          disabled={isSubmitting}
        />
        <ErrorText errorText={errors.name?.message} error={errors.name} />
        <LabelInput
          type="text"
          id="email"
          label={"メールアドレス"}
          {...register("email")}
          disabled={isSubmitting}
        />
        <ErrorText errorText={errors.email?.message} error={errors.email} />
        <LabelTextErea
          label={"本文"}
          id="message"
          {...register("message")}
          rows={8}
          disabled={isSubmitting}
        />
        <ErrorText errorText={errors.message?.message} error={errors.message} />
        <div className="flex justify-center mt-10 gap-4">
          <Button
            type={"submit"}
            variant={"default"}
            disabled={isSubmitting}
            isSubmitting={isSubmitting}
            text={"送信"}
          />
          <Button
            type={"button"}
            variant={"secondary"}
            onClick={() => reset()}
            disabled={isSubmitting}
            isSubmitting={isSubmitting}
            text={"クリア"}
          />
        </div>
      </form>
    </>
  );
}
