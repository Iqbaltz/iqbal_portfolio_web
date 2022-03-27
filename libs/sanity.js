// import {
//   createClient,
//   createImageUrlBuilder,
//   createPreviewSubscriptionHook,
// } from "next-sanity";

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-03-26",
};

export const client = sanityClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export const imageBuilder = (source) =>
//   createImageUrlBuilder(config).image(source);
// export const usePreviewSubscription = createPreviewSubscriptionHook(config);
// export const client = createClient(config);
// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// });

// export const getClient = (usePreview) => (usePreview ? previewClient : client);
// export default client;
