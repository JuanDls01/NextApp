import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

export const ChatForm = () => {
    const form = React.useRef();
    const serviceID = process.env.SERVICE_ID
    const templateID = process.env.TEMPLATE_ID
    const publicKey = process.env.PUBLIC_KEY
    console.log(serviceID, templateID, publicKey)
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <form  onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    )
}

