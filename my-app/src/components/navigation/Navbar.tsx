// import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/Bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Icon } from './ui/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router'

const linkedin: string = 'https://www.linkedin.com/in/juandelossantosdeveloper/';
const github: string = 'https://github.com/JuanDls01';
const twitter = 'https://twitter.com/JuanDls01';

export const Navbar = () => {
  const { asPath } = useRouter()
  return (
    <nav className='h-12 lg:h-16 border-b-2 border-black dark:border-white bg-white  text-black flex flex-row place-content-between items-center'>
      <a className="font-archivo text-black text-base md:text-2xl font-bold mx-2 md:mx-8">
        ../Portfolio/<Link href='/'><span className='cursor-pointer hover:underline hover:underline-offset-2'>Juani</span></Link>{asPath}
      </a>
      <ul className='w-20 h-full mx-2 md:w-32 md:mx-8 flex items-center place-content-around '>
        <li >
          <Icon link={github}>
            <FaGithub />
          </Icon>
        </li>
        <li>
          <Icon link={linkedin}>
            <FaLinkedinIn />
          </Icon>
        </li>
        <li>
          <Icon link={twitter}>
            <FaTwitter />
          </Icon>
        </li>
      </ul>
    </nav>
    
  )
}