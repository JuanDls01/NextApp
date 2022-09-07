import Image from "next/image";
import { TitleCard } from "./ui/TitleCard";
import { StaticImageData } from "next/image";
import { ParagragphCard } from "./ui/ParagraphCard";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

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
        <Card className="w-80 h-80 m-6 p-3.5 flex justify-between rounded-lg border-2 border-black bg-white dark:bg-transparent dark:border-white">
            <CardHeader color="blue" className="static h-28">
                <img
                src={project.image}
                alt="img-blur-shadow"
                className="absolute bottom-44 left-3.5 w-72 h-40 rounded-lg"
                />
            </CardHeader>
            <CardBody className="text-justify">
                <Typography variant="h5" className="font-archivo font-semibold text-yellow-600 my-1 text-sm md:text-lg">
                {project.name}
                </Typography>
                <Typography variant='paragraph' className='font-archivo text-black dark:text-white font-medium my-1 text-sm md:text-md h-12'>
                Technologies: {project.technologies}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between">
                <Button variant="gradient" ripple={true} className="font-archivo border-2 border-black bg-sky-500 bg-opacity-90 dark:border-white hover:bg-sky-400 py-2 px-4 flex items-center justify-center">REPO</Button>
                <Button variant="gradient" ripple={true} className="font-archivo text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 py-2 px-4 flex items-center justify-center">DEPLOY</Button>
            </CardFooter>
        </Card>
    )
}