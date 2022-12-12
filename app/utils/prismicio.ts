// app/utils/prismicio.ts
import {
  createClient,
  getRepositoryEndpoint,
} from "@prismicio/client";

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
