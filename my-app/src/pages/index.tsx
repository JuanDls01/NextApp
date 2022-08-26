import type { NextPage } from 'next'
import Head from 'next/head'
import {Layout} from '../hocs/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <title>../Portfolio/Juani</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </Layout>
    </div>
    
    
  )
}

export default Home
