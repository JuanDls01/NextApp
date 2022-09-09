import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import {ButtonRepo} from './ui/ButtonRepo'
import { ButtonDeploy } from "./ui/ButtonDeploy";

interface props {
    project: {
        id: number,
        name: string,
        image: string,
        description: string,
        technologies: string,
        github: string,
        deploy: string,
    }
}

// box-shadow: 0_-6px_6px_0px_rgba(0,0,0,0)

export const ProjectCard = ({project}: props) => {
    return (
        <Card className="w-56 md:w-80 h-56 md:h-80 my-6 mx:3 md:m-6 p-2 md:p-3.5 flex justify-between border-2 border-black bg-white dark:bg-transparent dark:border-white transition hover:shadow-[-6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1">
            <CardHeader color="blue" className="h-3/6">
                <img
                src={project.image}
                alt="img-blur-shadow"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="text-justify h-2/6 flex flex-col justify-around">
                <Typography variant="h5" className="font-archivo font-semibold text-sm md:text-lg text-yellow-600">
                {project.name}
                </Typography>
                <Typography variant='paragraph' className='font-archivo text-black dark:text-white font-medium text-xs md:text-sm text-ellipsis'>
                Technologies: {project.technologies}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between h-1/6">
                <ButtonRepo link={project.github}>REPO</ButtonRepo>
                <ButtonDeploy link={project.deploy}>DEPLOY</ButtonDeploy>
            </CardFooter>
            
        </Card>
    )
}