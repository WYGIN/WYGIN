// app/utils/prismicio.ts
import {
  createClient,
  getRepositoryEndpoint,
} from "@prismicio/client";

// app/utils/prismicio.ts
import type { LinkResolverFunction } from "@prismicio/helpers";

export const linkResolver: LinkResolverFunction = (
  document
) => {
  if (document.isBroken) {
    return "/not-found";
  }
  if (document.type === "page") {
		if (document.uid === "home") {
	    return `/${document.uid}`;
	  }
    return `/${document.uid}`;
  }
  return "/";
};

//Add your unique repository name, such as "my-prismic-remix-site" below
export const repoName = [Insert your unique repository name here];
// If your Prismic repo is private, add your token here:
export const accessToken = "";
export const endpoint = getRepositoryEndpoint(repoName);

export const getPrismicClient = () => {
  return createClient(repoName, {
    accessToken,
  });
};
