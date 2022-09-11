import type { NextPage } from 'next'
import { Layout } from '../hocs/Layout';
import { Title } from '../components/navigation/ui/Title';
import { Paragragph } from '../components/navigation/ui/Paragraph';
import { SubTitle } from '../components/navigation/ui/Subtitle';

const Resume: NextPage = () => {
  return (
    <Layout>
      <div className='w-5/6 h-auto py-2 px-5 sm:py-4 sm:px-10 md:py-8 md:px-20 border-l-2 border-black dark:border-white'>
        <Title>Resume</Title>
        <Paragragph>A summary of my education, work history, credentials, and other accomplishments and skills</Paragragph>
        <SubTitle>Professional Experience</SubTitle>
        <SubTitle>Professional Education</SubTitle>
      </div>
    </Layout>
  )
}

export default Resume