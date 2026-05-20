type Props = {
    label : string;
}

export default function Label({ label }:Props) {
  return (
    <label className="w-60" htmlFor="name">
      {label}
    </label>
  );
}
