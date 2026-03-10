import { locations } from "#constants"
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";

import clsx from "clsx";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
const projects = locations?.work?.children ?? []
const Home = () => {

    // handling folder function
    const {setActiveLocation} = useLocationStore()
    const {openWindow} = useWindowStore()

    const handleOpenFolder = (project) => {
        setActiveLocation(project)
        openWindow('finder')
    }

    useGSAP(()=>{
        Draggable.create('.folder')
    },[])
  return (
    <section id='home'>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className={clsx('folder group', project.windowPosition)} onClick={()=> handleOpenFolder(project)}>
            <img src='/images/folder.png' alt='folder' />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home