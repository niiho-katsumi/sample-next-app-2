type Props = {
  title: string;
  url: string;
};

export default function Thumbnail({ title, url }: Props) {
  return (
    <>
      <img src={url} alt={title} />
    </>
  );
}
