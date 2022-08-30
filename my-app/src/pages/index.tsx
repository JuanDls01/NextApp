import type { NextPage } from 'next'
import Head from 'next/head'
import {Layout} from '../hocs/Layout'
import { Title } from '../components/navigation/ui/Title'
import FotoPerfil from '../../images/FotoPerfil.png'
import Image from 'next/image'

const layout = 'flex flex-col flex-center items-center'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <title>../Portfolio/Juani</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
      </Head>
      <Layout>
        <div className='w-5/6 h-screen p-20 md:pt-10'>
            {/* <Image src={Image}/>
            <img src={FotoPerfil} alt={FotoPerfil}/> */}
            <Title>
              Hi,<br></br>My name is Juan Ignacio
            </Title>
        </div>
      </Layout>
    </div>
    
    
  )
}

export default Home
