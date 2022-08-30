import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Layout} from '../hocs/Layout'
import { Title } from '../components/ui/Title'
import { SubTitle } from '../components/ui/Subtitle'
import { Paragragph } from '../components/ui/Paragraph'
import FotoPerfil from '../../public/FotoPerfil.png'
import { Carousel } from '../components/Carousel'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <title>../Portfolio/Juani</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
      </Head>
      <Layout>
        <div className='w-5/6 h-screen py-2 px-10 md:py-8 md:px-20'>
            <div className='w-20 h-20 md:w-32 md:h-32 border-2 border-black dark:border-white rounded-full'>
              <Image src={FotoPerfil} className='rounded-full border-2 border-blue-500' objectFit='cover' width={130} height={130}/>
            </div>
            <Title>
              Hi 👋🏻,<br></br>My name is Juan Ignacio.
            </Title>
            <SubTitle>
              But you can call me Juani
            </SubTitle>
            <Paragragph>
              I'm a <span className='font-semibold'>FullStack Web Developer</span> and <span className='font-semibold'>Industrial Engineer Student Advance</span>. 
              I really like working on the <span className='font-semibold'>Backend</span>, 
              creating functionalities and Rest APIs, but I can also develop really cool 
              user interface on the <span className='font-semibold'>Frontend</span>.
              I consider myself a Student of Uncle Bob's "Clean Code Mentoring School"
            </Paragragph>
            <Paragragph>
              I really like <span className='font-semibold'>Python</span> because it's my 
              first programming language, but I also really like <span className='font-semibold'>JavaScript</span> and 
              even more <span className='font-semibold'>TypeScript</span>. These are some of
              the technologies I work with:
            </Paragragph>
            <Carousel />
        </div>
      </Layout>
    </div>
    
    
  )
}

export default Home
