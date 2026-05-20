type Props = {
  children: React.ReactNode;
  omission: boolean;
};

export default function Content({ children, omission }: Props) {
  return (
    <div
      className={`text-[1rem] leading-normal whitespace-pre-wrap ${omission ? "line-clamp-3" : ""}`}
    >
      {children}
    </div>
  );
}
