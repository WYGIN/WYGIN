export default function PostCardLayout({ data }: {data!: object}) {
  return(
    <p>
      { data.stringify() }
    </p>
  );
}
