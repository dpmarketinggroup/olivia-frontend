import type { NextApiRequest, NextApiResponse } from "next";
import { STRAPI_URL } from "../../../lib/strapi.server";

/** Povolené collection typy – proxy nesmie sprístupniť celé Strapi API s privilegovaným tokenom. */
const ALLOWED_COLLECTIONS = ["byts"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const segments = Array.isArray(req.query.path)
    ? req.query.path
    : [req.query.path ?? ""];

  if (!ALLOWED_COLLECTIONS.includes(segments[0])) {
    return res.status(404).json({ error: "Not Found" });
  }

  const queryIndex = req.url?.indexOf("?") ?? -1;
  const query = queryIndex === -1 ? "" : req.url!.slice(queryIndex);

  try {
    const response = await fetch(
      `${STRAPI_URL}/api/${segments.join("/")}${query}`,
      { headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` } }
    );
    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (e) {
    console.log(e);
    return res.status(502).json({ error: "Strapi je nedostupný" });
  }
}
