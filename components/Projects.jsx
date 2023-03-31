import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dashboard from '../public/assets/projects/dashboard.png';
import chatApp from '../public/assets/projects/chat app.png'
import movieApp from '../public/assets/projects/movie app.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Dahboard App'
            backgroundImg={dashboard}
            projectUrl='/dashboard'
            tech='Next JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={chatApp}
            projectUrl='/chat-app'
            tech='React JS'

          />
          <ProjectItem
            title='Movie App'
            backgroundImg={movieApp}
            projectUrl='/movie'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
