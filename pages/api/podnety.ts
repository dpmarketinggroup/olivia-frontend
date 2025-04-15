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

  const url = "https://api.sendinblue.com/v3/contacts";

  if (req.method === "POST") {
    // Hlavný transporter
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.m1.websupport.sk",
      auth: {
        user: process.env.SEND_MAIL, // napr. info@...
        pass: process.env.SEND_PASSWD,
      },
      secure: true,
    });

    // E-mail pre tím
    await transporter.sendMail({
      from: {
        name: "Olivia Residence",
        address: `info@oliviaresidence.sk`,
      },
      subject: "Nový podnet z webovej stránky",
      to: `podnety@oliviaresidence.sk`,
      html: `
        <div>
          <h5><span style="text-decoration: underline">Meno:</span> ${name} ${surname}</h5>
          <h5><span style="text-decoration: underline">Email:</span> ${email}</h5>
          <h5><span style="text-decoration: underline">Telefónne číslo:</span> ${phone}</h5>
          <h5><span style="text-decoration: underline">Podnet:</span> ${message}</h5>
        </div>`,
    });

    // E-mail pre používateľa
    await transporter.sendMail({
      from: {
        name: "Olivia Residence",
        address: `podnet@oliviaresidence.sk`,
      },
      to: email,
      subject: "Ďakujeme za váš podnet",
      html: `
        <div>
          <p>Dobrý deň, ${name} ${surname},</p>
          <p>ďakujeme, že ste nás kontaktovali. Váš podnet sme úspešne prijali a budeme sa mu venovať čo najskôr.</p>
          <p>S pozdravom,<br><strong>Olivia Residence</strong></p>
        </div>
      `,
    });

    // Odoslanie kontaktu do Sendinblue
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
