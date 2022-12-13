import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { client } from "../utils/PrismicClient";
import * as prismic from "@prismicio/client";

import { useCatch } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  return {
    
  };
}

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
  let dateOfPosts = new Date();
  dateOfPosts.setMonth(dateOfPosts.getMonth() - 3);
  const indexPage = await client.getAllByType("post", {
    graphQuery: `
      {
        post {
          title
          body
          featured_image
          category {
            ...on category {
              level0
              level1
              level2
            }
          }
          tags {
            tag {
              ...on tag {
                label
              }
            }
          }
          author {
            ...on author {
              name
              profile
              _meta {
                uid
              }
            }
          }
          _meta {
            uid
          }
        }
      }
    `,
    predicates: [
      prismic.predicate.dateBefore( 'document.last_publication_date', dateOfMonth.toISOString().substring(0, 10) )
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
