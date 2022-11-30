import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = JSON.parse(req.body.body);
  const url = "https://api.sendinblue.com/v3/contacts";
  if (req.method === "POST") {
    await axios.post(
      url,
      { updateEnabled: true, email, listIds: [11] },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key":
            "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",
        },
      }
    );
    res.send({
      status: 200,
      text: "Ok",
    });
  }
}
