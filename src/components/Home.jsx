import { locations } from '#constants';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/all';

import clsx from 'clsx';
import useLocationStore from '#store/location';
import useWindowStore from '#store/window';
const projects = locations?.work?.children ?? [];
const Home = () => {
  // handling folder function
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenFolder = (project) => {
    setActiveLocation(project);
    openWindow('finder');
  };

  useGSAP(() => {
    Draggable.create('.folder');
  }, []);
  return (
    <section id='home'>
      <ul className='flex flex-col gap-4 p-8 md:p-12 items-start'>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx(
              'folder group flex items-center gap-4 cursor-pointer w-fit',
            )}
            onClick={() => handleOpenFolder(project)}
          >
            <img
              src='/images/folder.png'
              alt='folder'
              className='w-16 h-16 md:w-19 md:h-19 lg:w-20 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-110 flex-shrink-0'
            />
            <p className='text-xs md:text-sm text-[#dae2fd] font-medium group-hover:text-[#92d9ff] transition-colors'>
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
