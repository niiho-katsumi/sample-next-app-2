"use client";
import { contactSchemaType } from "@/app/_schemas/contact.schema";
import ContactForm from "./_components/ContactForm";

export default function Page() {
  const onSubmit = async (data: contactSchemaType) => {
    try {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (!res.ok) throw new Error(`httpエラー:${res.status}`);

      alert("送信しました");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ContactForm onSubmit={onSubmit} />
    </>
  );
}
