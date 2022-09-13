type Props = {
    type: string
    value: string
}

export const SubmitButton = ({type, value}: Props) => {
    return(
        <input 
            type={type}
            value={value}
            className='w-1/6 px-10 py-3 bg-black text-white dark:bg-white dark:text-[#000201] font-archivo my-1 md:my-2 text-base md:text-lg rounded-none cursor-pointer'
        />
    )
}