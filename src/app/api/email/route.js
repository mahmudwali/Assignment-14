import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function GET(req, res) {
    const {searchParams} = new URL(req.url);
    let toEmail= searchParams.get('email')


    // Transporter
    let Transporter= nodemailer.createTransport({
        host:'mail.teamrabbil.com',
    port:25,
    secure:false,
    auth:{
        user:'info@teamrabbil.com',
        pass:'-sR4[bhaC[Qs'
    },
    tls:{rejectUnauthorized: false}
    })




    //Prepare Email
    let myEmail = {
        form: 'Test Email From Next JS Application: info@teamrabbil.com',
        to: toEmail,
        subject: 'Test Email',
        text: 'Test Email Next JS'
    }

    try{
        await Transporter.senMail(myEmail);
        return NextResponse.json({message:'Success'})
    }catch(e) {
        return NextResponse.json({message:'Failed'})

    }
    

    NextResponse.json()
}

