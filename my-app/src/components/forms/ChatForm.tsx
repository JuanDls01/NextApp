import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

export const ChatForm = () => {
    const form = React.useRef();
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || ''
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || ''
    console.log(serviceID, templateID, publicKey)
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || ''
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || ''
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || ''
        console.log(serviceID, templateID, publicKey)
        console.log('hola')
        
        emailjs.sendForm(serviceID, templateID, e.currentTarget, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    )
}

