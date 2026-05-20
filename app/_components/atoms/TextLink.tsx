import { Link } from "react-router-dom";

type Props = {
  text: string;
  to: string;
};

export default function TextLink({ text, to }: Props) {
  return (
    <Link className="text-white font-bold" to={to}>
      {text}
    </Link>
  );
}
