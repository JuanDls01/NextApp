import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/Bs';
import { IconContext } from 'react-icons';
import { Icon } from '../ui/Icon';

const linkedin: string = 'https://www.linkedin.com/in/juandelossantosdeveloper/';
const github: string = 'https://github.com/JuanDls01';

export const Navbar = () => {
  return (
    <nav className='h-12 border-b-2 border-black dark:border-white flex flex-row place-content-between items-center'>
      <a className="font-archivo text-base md:text-2xl font-bold mx-2 md:mx-8">
        ../Portfolio/Juani
      </a>
      <ul className='w-20 h-full mx-2 md:w-32 md:mx-8 flex items-center place-content-around '>
        <li >
          <Icon link={linkedin}>
            <BsLinkedin />
          </Icon>
        </li>
        <li>
          <Icon link={github}>
            <BsGithub />
          </Icon>
        </li>
        <li>
          <Icon link={linkedin}>
            <BsMailbox />
          </Icon>
        </li>
      </ul>
    </nav>
    
  )
}