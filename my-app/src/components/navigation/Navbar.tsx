import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/Bs'

export const Navbar = () => {
  return (
    <nav className='h-12 border-b-2 flex flex-row place-content-between items-center'>
      <a className="text-2xl font-bold ml-8s">
        ../Portfolio/Juani
      </a>
      <ul className='flex items-center w-24 place-content-around mr-8'>
        <li className='w-3 h-3'>
          <BsLinkedin />
        </li>
        <li>
          <BsGithub />
        </li>
        <li>
          <BsMailbox />
        </li>
      </ul>
    </nav>
    
  )
}