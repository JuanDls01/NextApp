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

export const ProjectCard = ({project}: props) => {
    return (
        <Card className="w-56 md:w-80 h-56 md:h-80 my-6 mx:3 md:m-6 p-2 md:p-3.5 flex justify-between rounded-lg border-2 border-black bg-white dark:bg-transparent dark:border-white">
            <CardHeader color="blue" className="static h-20 md:h-28">
                <img
                src={project.image}
                alt="img-blur-shadow"
                className="absolute bottom-32 md:bottom-44 left-1.5 md:left-3.5 w-52 md:w-72 h-28 md:h-40 rounded-lg"
                />
            </CardHeader>
            <CardBody className="text-justify">
                <Typography variant="h5" className="font-archivo font-semibold text-yellow-600 my-1 text-sm md:text-lg">
                {project.name}
                </Typography>
                <Typography variant='paragraph' className='font-archivo text-black dark:text-white font-medium my-1 text-xs md:text-sm h-12'>
                Technologies: {project.technologies}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between">
                <ButtonRepo link={project.github}>REPO</ButtonRepo>
                <ButtonDeploy link={project.deploy}>DEPLOY</ButtonDeploy>
            </CardFooter>
        </Card>
    )
}