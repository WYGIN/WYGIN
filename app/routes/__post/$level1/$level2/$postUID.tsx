import { client } from "~/utils/PrismicClient";
import { BlogPost } from "~/components/view/BlogPost";
import type { MetaFunction } from "@remix-run/cloudflare"; // or cloudflare/deno
import type { LinksFunction } from "@remix-run/cloudflare"; // or cloudflare/deno

export const links: LinksFunction = () => {
  return []
}

export const meta: MetaFunction = () => {
  return {
    
  };
};

export const loader = async({ params }) => {
  const postData = await client.getByUID('post', params.postUID);
  if(!postData || !postData.keys('post').length) {
    throw new Response("", { status: 404 });
  }
  return json(postData);
}

export default function Post() {
  const { postData } = useLoaderData<typeof loader>();
  return (
    <BlogPost postData={postData}></BlogPost>
  )
}

export function CatchBoundary() {
  const caught = useCatch<ThrownResponses>();
  
  switch (caught.status) {
    case 401: 
      return (
        <>
        </>
      );
    case 404:
      return (
        <>
        </>
      );
  }
  
  return (
    <div>
      Something went wrong: {caught.status}{" "}
      {caught.statusText}
    </div>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}
