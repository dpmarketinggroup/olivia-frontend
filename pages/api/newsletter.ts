import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const {email} = JSON.parse(req.body.body)
    const url = "https://api.sendinblue.com/v3/contacts";
    if (req.method === "POST") {
        let response = await axios.get(`https://api.sendinblue.com/v3/contacts/${email}`, {
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                "api-key":
                    "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",
            },
        });
        await axios.post(
            url,
            {updateEnabled: true, email, listIds: [...response.data.listIds, 11],},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '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'
                }
            }
        )
        res.send({
            status: 200,
            text: 'Ok'
        })
    }
}
