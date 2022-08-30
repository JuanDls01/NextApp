import type { NextPage } from 'next';
import { Layout } from '../hocs/Layout';
import { Title } from '../components/ui/Title';

const Contact: NextPage = () => {
  return (
    <Layout>
      <div className='w-5/6 h-screen pt-2 pr-10 pb-10 pl-10 md:pt-8 md:pr-20 md:pb-20 md:pl-20'>
        <Title>Contact</Title>
      </div>
    </Layout>
  )
}

export default Contact