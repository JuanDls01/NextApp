import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/Bs';
import { IconContext } from 'react-icons';
import { Icon } from './ui/icon';

const linkedin: string = 'https://www.linkedin.com/in/juandelossantosdeveloper/';
const github: string = 'https://github.com/JuanDls01';

export const Navbar = () => {
  return (
    <nav className='h-12 border-b-2 flex flex-row place-content-between items-center'>
      <a className="font-archivo text-2xl font-bold mx-8">
        ../Portfolio/Juani
      </a>
      <ul className='flex items-center w-32 h-10 place-content-around mx-8'>
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