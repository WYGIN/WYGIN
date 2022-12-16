export default function PostCardLayout({ data!: any}) {
  return(
    <p>
      { JSON.stringify(data) }
    </p>
  );
}
