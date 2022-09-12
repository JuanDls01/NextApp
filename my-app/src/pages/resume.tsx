import type { NextPage } from 'next'
import { Layout } from '../hocs/Layout';
import { Title } from '../components/navigation/ui/Title';
import { Paragragph } from '../components/navigation/ui/Paragraph';
import { SubTitle } from '../components/navigation/ui/Subtitle';
import { ResumeCardDescription } from '../components/cards/ResumeCardDescription';

import { resumeData } from '../data/resume';

const ProfessionalEducationResumeData = resumeData.filter(element => element.category === 'Professional Education')
const ProfessionalExperienceResumeData = resumeData.filter(element => element.category === 'Professional Experience')

const Resume: NextPage = () => {
  return (
    <Layout>
      <div className='w-5/6 h-auto py-2 px-5 sm:py-4 sm:px-10 md:py-8 md:px-20 border-l-2 border-black dark:border-white'>
        <Title>Resume</Title>
        <Paragragph>A summary of my education, work history, credentials, and other accomplishments and skills</Paragragph>
        {
          ProfessionalEducationResumeData?
          <>
          <SubTitle>Professional Education</SubTitle>
          {
            ProfessionalEducationResumeData.map(education => {
              return(
                <ResumeCardDescription key={education.id} experience={education}/>
              )
            })
          }
          </>:
          null
        }
        {
          ProfessionalExperienceResumeData?
          <>
          <SubTitle>Professional Experience</SubTitle>
          {
            ProfessionalExperienceResumeData.map(work => {
              return(
                <ResumeCardDescription key={work.id} experience={work}/>
              )
            })
          }
          </>:
          null
        }
      </div>
    </Layout>
  )
}

export default Resume