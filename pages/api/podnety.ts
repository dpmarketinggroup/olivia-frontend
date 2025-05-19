import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";
import router from "next/router";
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
    default:
      return 0;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { email, surname, name, phone, message, apartment, type } =
      req.body as Data;

    const transporter = nodemailer.createTransport({
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
        address:
          type === "dopyt"
            ? "predaj@oliviaresidence.sk"
            : "podnety@oliviaresidence.sk",
      },
      subject: "Nový podnet z webovej stránky",
      to:
        type === "dopyt"
          ? "predaj@oliviaresidence.sk"
          : "podnety@oliviaresidence.sk",
      html: `
        <div>
          <h5><span style="text-decoration: underline">Meno:</span> ${name} ${surname}</h5>
          <h5><span style="text-decoration: underline">Email:</span> ${email}</h5>
          <h5><span style="text-decoration: underline">Telefónne číslo:</span> ${phone}</h5>
          <h5><span style="text-decoration: underline">Správa:</span> ${message}</h5>
          ${
            apartment
              ? `<h5><span style="text-decoration: underline">Typ podnetu:</span>${apartment}</h5>`
              : ""
          }
        </div>
      `,
    });

    await axios.post(
      "https://api.sendinblue.com/v3/contacts",
      {
        updateEnabled: true,
        email,
        attributes: {
          FIRSTNAME: name,
          LASTNAME: surname,
          SMS: phone && !isNaN(Number(phone)) ? Number(phone) : null,
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
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Email/sendinblue error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
