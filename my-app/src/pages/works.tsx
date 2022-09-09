import type { NextPage } from 'next';
import { Layout } from '../hocs/Layout';
import { ProjectCard } from '../components/cards/ProjectCard';
import { Title } from '../components/navigation/ui/Title';
import { Paragragph } from '../components/navigation/ui/Paragraph';
import { Projects } from '../data/projects';

const Works: NextPage = () => {
  return (
    <Layout>
      <div className='w-5/6 h-auto py-2 px-10 md:py-8 md:px-20 border-l-2 border-black dark:border-white'>
        <Title>Works</Title>
        <Paragragph>Repository of projects that I worked before</Paragragph>
        <div className="flex flex-wrap justify-around bg-[url('https://d39uo3k0liehyo.cloudfront.net/roadmap-v2/images/bg-pattern.png')] bg-transparent">
          {
            Projects && Projects.map(project => {
              return (
                <ProjectCard key={project.id} project={project} />
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default Works
