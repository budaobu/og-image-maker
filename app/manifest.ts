import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Free Open Graph Image Generator",
    short_name: "OG Image",
    description: "Create beautiful OG images for your website, blog, or X(Twitter) profile for free, in simple clicks.",
    start_url: "/",
    display: "standalone",
  }
}
