import type { NextPage } from 'next'
import { Title } from '../components/ui/Title'
import { Layout } from '../hocs/Layout';
import { Paragragph } from '../components/ui/Paragraph';

const Resume: NextPage = () => {
  return (
    <Layout>
      <div className='w-5/6 h-screen pt-2 pr-10 pb-10 pl-10 md:pt-8 md:pr-20 md:pb-20 md:pl-20'>
        <Title>Resume</Title>
        <Paragragph>
          A summary of my education, work history, credentials, and other accomplishments and skills
        </Paragragph>
      </div>
    </Layout>
  )
}

export default Resume