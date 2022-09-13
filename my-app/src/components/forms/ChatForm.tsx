import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import { InputChatForm } from './ui/InputChatForm';
import { SubmitButton } from './ui/SubmitButton';
import { TextAreaForm } from './ui/TextArea';

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import swal from 'sweetalert';

export interface ChatFormValues {
    name: string;
    company: string
    email: string;
    message: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
        .min(3, 'Too short!')
        .max(50, 'Too long!'),
    company: Yup.string().required('Required').min(3, 'Too short!').max(50, 'Too long!'),
    email: Yup.string().required('Required').email('Invalid email'),
    message: Yup.string().required('Required').min(10, 'Too short!')
})

const sendEmail: SubmitHandler<ChatFormValues> = (data, e) => {
    
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || ''
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || ''
    
    emailjs.sendForm(serviceID, templateID, e?.target, publicKey)
    .then((result) => {
        swal({
            title: "Your message was sent correctly",
            text: "I will answer you shortly!",
            icon: "success",
          });
    }, (error) => {
        swal({
            title: "Ups",
            text: "Something goes wrong, try again",
            icon: "error",
          });
    });
}

export const ChatForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState:{errors, isSubmitSuccessful}
    } = useForm<ChatFormValues>({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    })

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ 
            name: '',
            company: '',
            email: '',
            message: '',
        });
        }
      }, [formState, reset]);

    return (
        <form onSubmit={handleSubmit(sendEmail)}>
            <InputChatForm 
                type="text" 
                name="name"
                label="Name" 
                placeholder='Juan Cruz Fernandez'
                error={errors?.name && errors.name.message} 
                register={register} 
            />
            <InputChatForm 
                type="text" 
                name="company"
                label="Company" 
                placeholder='Empresa S.A.'
                error={errors?.company && errors.company.message} 
                register={register} 
            />
            <InputChatForm 
                type="text" 
                name="email"
                label="Email" 
                placeholder='juancfernandez@gmail.com'
                error={errors?.email && errors.email.message} 
                register={register} 
            />
            <TextAreaForm 
                id='message' 
                label='Message' 
                placeholder='Anything I can help? Let me know'
                error={errors?.email && errors.email.message}
                register={register}
            />
            <SubmitButton type="submit" value="Send" />
        </form>
    )
}

