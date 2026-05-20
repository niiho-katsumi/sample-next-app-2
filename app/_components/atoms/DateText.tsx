type Props = {
  createdAt: string;
};

export default function DateText({ createdAt }: Props) {
  const d = new Date(createdAt);
  const year = d.getFullYear();
  const month = ("00" + (d.getMonth() + 1)).slice(-2);
  const date = ("00" + d.getDate()).slice(-2);
  return (
    <div className="text-[0.8rem] text-[#888]">{year + month + "/" + date}</div>
  );
}
