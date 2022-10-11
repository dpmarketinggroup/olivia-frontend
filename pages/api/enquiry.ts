import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";

export default async function(req: NextApiRequest, res: NextApiResponse) {
    const {phone, email, name, vin} = JSON.parse(req.body.body)
    if (req.method === "POST") {
        // Process a POST request
    }
    // let transporter = nodemailer.createTransport({
    //     port: 465,
    //     host: "smtp.m1.websupport.sk",
    //     auth: {
    //         user: 'activeauto@dpmg.dev',
    //         pass: 'Gq9w{J()p,',
    //     },
    //     secure: true,
    // })

    // await transporter.sendMail({
    //     from: {
    //         name: 'Active Auto',
    //         address: 'activeauto@dpmg.dev'
    //     },
    //     subject: 'Nový dopyt z webovej stránky',
    //     bcc: 'leads@dpmg.dev',
    //     to: 'info@activeauto.sk',
    //     html: ` <div>
    //               <h5><span style="text-decoration: underline">Meno:</span> ${name}</h5>
    //               <h5><span style="text-decoration: underline">Email:</span> ${email}</h5>
    //               <h5><span style="text-decoration: underline">Telefónne číslo:</span> ${phone}</h5>
    //               <h5><span style="text-decoration: underline">VIN:</span> ${vin}</h5>
    //           </div>`
    // })

    res.json({
        message: 'Ok',
        status: 200
    })
}
