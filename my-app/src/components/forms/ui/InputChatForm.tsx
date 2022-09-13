import { UseFormRegister, Path, FieldErrorsImpl } from "react-hook-form"
import {ChatFormValues} from '../ChatForm'

type Props = {
    type: string
    name: Path<ChatFormValues>
    label: string
    placeholder: string
    error: string | undefined
    register: UseFormRegister<ChatFormValues>
}

export const InputChatForm = ({type, name, label, placeholder,error, register}: Props) => {
    return (
        <div className="flex flex-col my-1.5">
            <label className="font-archivo font-semibold my-1 md:my-2 text-base md:text-lg">{label}{error && <span className="text-red-500 ml-0.5">*</span>}</label>
            <input 
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className="h-10 p-3 dark:bg-[#272727] text-black dark:text-[#FFFCF5] text-base font-light focus:outline-none focus:border-[#D3902A] focus:ring-1 focus:ring-[#D3902A]"
            />
            {error && <p className="text-red-500 font-light text-sm mt-0.5">{error}</p>}
        </div>

    )
}