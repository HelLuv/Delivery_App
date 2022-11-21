import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


const sanityClient = SanityClient({
  projectId: "jd57w7ev",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

export default sanityClient;