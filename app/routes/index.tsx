import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { client } from "../utils/PrismicClient";
import * as prismic from "@prismicio/client";

import { useCatch } from "@remix-run/react";

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}

export const loader = async () => {
  const indexPage = await client.getAllByType("post", {
    predicates: [
      prismic.predicate.dateYear( 'document.last_publication_date', '2023' )
    ]
  });
  return json({ indexPage })
};

export default function Index() {
  const { indexPage } = useLoaderData<typeof loader>();
  return (
    <>
      
    </>
  )
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
