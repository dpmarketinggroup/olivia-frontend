import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";
import axios from "axios";

interface Data {
    name: string;
    surname: string;
    phone: string;
    email: string;
    message: string;
    apartment?: string;
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const {email, surname, name, phone, message, apartment} = JSON.parse(req.body.body) as Data;
    const modifiedNum = phone.substring(1);
    const url = "https://api.sendinblue.com/v3/contacts";

    if (req.method === "POST") {
        await axios.post(
            url,
            {
                email,
                attributes: {
                    FIRSTNAME: name,
                    LASTNAME: surname,
                    SMS: Number(modifiedNum),
                },
                listIds: [3],
                emailBlacklisted: false,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                    "api-key":
                        "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",
                },
            }
        );
        // Process a POST request
        let transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.m1.websupport.sk",
            auth: {
                user: 'olivia@dpmg.dev',
                pass: 'Vu8f})kV3B',
            },
            secure: true,
        })

        await transporter.sendMail({
            from: {
                name: 'Olivia Residence',
                address: `${apartment ? 'predaj@oliviaresidence.sk' : 'info@oliviaresidence.sk'}`
            },
            subject: 'Nový dopyt z webovej stránky',
            // bcc: 'leads@dpmg.dev',
            to: `${apartment ? 'predaj@oliviaresidence.sk' : 'info@oliviaresidence.sk'}`,
            html: `
              <div>
                  <h5><span style="text-decoration: underline">Meno:</span> ${name} ${surname}</h5>
                  <h5><span style="text-decoration: underline">Email:</span> ${email}</h5>
                  <h5><span style="text-decoration: underline">Telefónne číslo:</span> ${phone}</h5>
                  <h5><span style="text-decoration: underline">Správa:</span> ${message}</h5>
                  ${apartment ? `
                        <h5><span style="text-decoration: underline">Apartmán:</span> č. ${apartment}</h5>
                  ` : ''}
              </div>`
        })

        res.send({
            status: 200,
            body: {
                name,
                surname,
                phone,
                message,
                email,
                apartment
            }
        })
    }
}
