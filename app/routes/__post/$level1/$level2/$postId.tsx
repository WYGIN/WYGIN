import { client } from "../utils/PrismicClient";

export const loader = async({ params }) => {
  const postData = client.getByUID('post', params.postId, {
    graphQuery: `
      {
        
      }
    `,
    predicates: [
      
    ]
  });
  if(!postData || !postData.keys('post').length) {
    throw new Response("", { status: 404 });
  }
  return json(postData);
}

export default function Post() {
  return ();
}

export function CatchBoundary() {
  const caught = useCatch<ThrownResponses>();
  
  switch (caught.status) {
    case 401: 
      return ();
    case 404:
      return ();
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
