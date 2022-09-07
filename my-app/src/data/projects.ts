import CountryApp from '../../public/works/CountryApp.png'
import TicketApp from '../../public/works/TicketApp.png';
import ImageUploader from '../../public/works/ImageUploader.png';

export const Projects = [
    {
        id: 1,
        name: 'Country App',
        image: 'https://raw.githubusercontent.com/JuanDls01/Portfolio/works/my-app/public/works/CountryApp.png',
        description: 'Single Page Application la cual permite visualizar banderas de países y actividades turísticas asociadas a la misma. Conectada a la API REST Countries para la solicitud de la información',
        technologies: 'JavaScript, React, Redux, NodeJS, Express y PostgreSQL',
        github: 'https://github.com/JuanDls01/PI-Countries-main',
        deploy: 'https://country-app-psi.vercel.app/',
    },
    {
        id: 2,
        name: 'My Ticket App',
        image: 'https://raw.githubusercontent.com/JuanDls01/Portfolio/works/my-app/public/works/TicketApp.png',
        description: 'Ecommerce de venta de entradas a conciertos, realizado como proyecto final del Bootcamp de Soy Henry, en conjunto con equipo interdisciplinario y aplicando SCRUM como metodología ágil',
        technologies: 'JavaScript, React, Redux, NodeJS, Express, PostgreSQL, git, Trello y JWT',
        github: 'https://github.com/JuanDls01/client-concerts',
        deploy: 'https://client-concerts.vercel.app/'
    },
    {
        id: 3,
        name: 'Uploader Image',
        image: 'https://raw.githubusercontent.com/JuanDls01/Portfolio/works/my-app/public/works/ImageUploader.png',
        description: 'Aplicación que permite subir una imagen, almacenarla, devolvernos una preview de la misma y brindarnos el link para luego poder usarla en nuestros proyectos',
        technologies: 'TypeScript, React, Next, Tailwind, Django, Django-REST-framework y Python',
        github: 'https://github.com/JuanDls01/ImageUploader',
        deploy: 'Not yet'
    }
]