type Props = {
    type: string
    value: string
}

export const SubmitButton = ({type, value}: Props) => {
    return(
        <input 
            type={type}
            value={value}
            className='w-20 h-8 xs:w-28 xs:h-10 md:w-32 md:h-14 flex items-center justify-center bg-black text-white dark:bg-white dark:text-[#000201] font-archivo my-1 md:my-2 text-base md:text-lg rounded-none cursor-pointer'
        />
    )
}