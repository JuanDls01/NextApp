interface experience {
    id: number,
    category: string,
    title: string,
    institution: string,
    since: string,
    to: string,
    description: string
}

type props = {
    experience: experience
}

export const ResumeCardDescription = ({experience}: props) => {
    const experienceSince = experience.since.split('-').pop()
    const experienceTo = experience.to.split('-').pop()
    const arrExperienceDescription = experience.description.split(';')
    return (
        <div className="mb-5 flex flex-column items-start gap-x-10">
            <h3 className="w-1/6 font-archivo font-semibold text-lg md:text-xl xl:text-2xl">{experienceSince} - {experienceTo}</h3>
            <details className="w-4/6">
                <summary className="font-archivo font-semibold text-lg md:text-xl xl:text-2xl">{experience.title}</summary>
                <h5 className="ml-6 my-1 font-archivo font-semibold text-sm md:text-base xl:text-lg text-gray-600 dark:text-gray-300">{experience.institution}</h5>
                <ul className="ml-12">
                    {arrExperienceDescription.map(element => <li className="list-disc my-1 text-justify font-archivo text-xs md:text-sm xl:text-base text-gray-600 dark:text-gray-300" key={element}>{element}</li>)}    
                </ul>
            </details>
        </div>
    )
}