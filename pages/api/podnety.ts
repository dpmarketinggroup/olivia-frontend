import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";

interface Data {
  name: string;
  surname: string;
  phone?: string;
  email: string;
  message?: string;
  apartment?: string;
  type: string;
}

function getListId(type: string) {
  switch (type) {
    case "stretnutie":
      return 10;
    case "dopyt":
      return 8;
    case "kontakt":
      return 9;
  }
  return 0;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, surname, name, phone, message, apartment, type } = JSON.parse(
    req.body.body
  ) as Data;
  // const modifiedNum =
  const url = "https://api.sendinblue.com/v3/contacts";
  if (req.method === "POST") {
    // Process a POST request
    let transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.m1.websupport.sk",
      auth: {
        user: process.env.SEND_MAIL,
        pass: process.env.SEND_PASSWD,
      },
      secure: true,
    });

    await transporter.sendMail({
      from: {
        name: "Olivia Residence",
        address: `${
          type === "dopyt"
            ? "predaj@oliviaresidence.sk"
            : "info@oliviaresidence.sk"
        }`,
      },
      subject: "Nový podnet z webovej stránky",
      bcc: "leads@dpmg.dev",
      to: `${
        type === "dopyt"
          ? "predaj@oliviaresidence.sk"
          : "info@oliviaresidence.sk"
      }`,
      html: `
              <div>
                  <h5><span style="text-decoration: underline">Meno:</span> ${name} ${surname}</h5>
                  <h5><span style="text-decoration: underline">Email:</span> ${email}</h5>
                  <h5><span style="text-decoration: underline">Telefónne číslo:</span> ${phone}</h5>
                  <h5><span style="text-decoration: underline">Správa:</span> ${message}</h5>
                  ${
                    apartment
                      ? `
                        <h5><span style="text-decoration: underline">Apartmán:</span> č. ${apartment}</h5>
                  `
                      : ""
                  }
              </div>`,
    });

    await axios.post(
      url,
      {
        updateEnabled: true,
        email,
        attributes: {
          FIRSTNAME: name,
          LASTNAME: surname,
          SMS: phone ? Number(phone?.substring(1)) : null,
          ZAUJEM_O: apartment,
        },
        listIds: [getListId(type)],
        emailBlacklisted: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "api-key": process.env.NEXT_PUBLIC_SENDIN_KEY,
        },
      }
    );

    res.send({
      status: 200,
      body: {
        name,
        surname,
        phone,
        message,
        email,
        apartment,
      },
    });
  }
}
