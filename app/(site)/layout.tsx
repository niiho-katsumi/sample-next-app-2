export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-28 mx-10">{children}</div>;
}
