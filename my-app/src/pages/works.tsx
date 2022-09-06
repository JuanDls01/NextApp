import type { NextPage } from 'next';
import { Layout } from '../hocs/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { Title } from '../components/navigation/ui/Title';
import { Paragragph } from '../components/navigation/ui/Paragraph';
import { Projects } from '../data/projects';

const Works: NextPage = () => {
  return (
    <Layout>
      <div className='w-5/6 h-screen pt-2 pr-10 pb-10 pl-10 md:pt-8 md:pr-20 md:pb-20 md:pl-20'>
        <Title>Works</Title>
        <Paragragph>Repository of projects that I worked before</Paragragph>
        {
          Projects && Projects.map(project => {
            return (
              <ProjectCard />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default Works
