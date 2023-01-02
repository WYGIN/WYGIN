// app/root.tsx
import { PrismicProvider } from "@prismicio/react";
import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import AnimationRevealPage from "~/helpers/AnimationRevealPage.js";

import { client } from "~/utils/PrismicClient";
import * as prismic from "@prismicio/client";
import Header from "~/components/headers/light";
import Footer from "~/components/footers/FiveColumnWithBackground";


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async ({ params }) => {
  const data = await client.getSingle('header-footer')
  return json({ data })
}

export default function App() {
  const { data } = useLoaderData<typeof loader>();
  
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <PrismicProvider>
          <AnimationRevealPage>
            <Header data={ data } />
              <Outlet />
            <Footer data={ data } />
          </AnimationRevealPage>
        </PrismicProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
