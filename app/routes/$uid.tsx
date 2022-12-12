// app/routes/$uid.tsx
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({
  params,
}) => {
  const customType = "page";
  const uid = params.uid as string;

  if (uid === "home") {
    return redirect("/");
  }

  try {
    const doc = await client.getByUID(customType, uid);
    return json(doc.data);
  } catch (error) {
    throw new Response("Not found", {
      status: 404,
    });
  }
};
