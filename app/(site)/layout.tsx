export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="my-10 mx-auto max-w-200">{children}</div>;
}
