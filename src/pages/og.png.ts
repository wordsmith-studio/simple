import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@lib/utils/generateOgImages";

export const GET: APIRoute = async () =>
  new Response(await generateOgImageForSite(), {
    headers: { "Content-Type": "image/png" },
  });
