import type { NextPage } from 'next'
import { Layout } from '../hocs/Layout';
import { Title } from '../components/navigation/ui/Title';
import { Paragragph } from '../components/navigation/ui/Paragraph';

const Resume: NextPage = () => {
  return (
    <Layout>
      <div className='w-5/6 h-auto py-2 px-10 md:py-8 md:px-20 border-l-2 border-black dark:border-white'>
        <Title>Resume</Title>
        <Paragragph>A summary of my education, work history, credentials, and other accomplishments and skills</Paragragph>
      </div>
    </Layout>
  )
}

export default Resume