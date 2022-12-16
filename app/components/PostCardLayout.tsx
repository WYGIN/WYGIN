export default function PostCardLayout({ data }: {data!: object}) {
  return(
    <p>
      { JSON.stringify(data) }
    </p>
  );
}
