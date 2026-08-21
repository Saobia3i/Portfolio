import type { MetadataRoute } from "next";

const BASE_URL = "https://saobiaislam.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/certificates", "/cv", "/resume"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
