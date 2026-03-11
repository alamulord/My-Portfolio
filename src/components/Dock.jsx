// import { useRef } from "react";
// import { dockApps } from "#constants";
// import {Tooltip} from "react-tooltip"
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import useWindowStore from "#store/window";

// const Dock = () => {
//     const {openWindow, closeWindow, windows} = useWindowStore()
//     const dockRef = useRef(null);

//     const handleClick = (app)=>{
//         // implementing the clickable dock functions
//         if (!app.canOpen) return;
//         const window = windows[app.id]

//         if (!window){
//             console.log(`The specified window ${app.id} you looking for does not exist`)
//         }

//         if (window?.isOpen) {
//           closeWindow(app.id);
//         } else {
//           openWindow(app.id);
//         }

//         console.log(windows)

//     }

//     useGSAP(()=>{
//         const dock = dockRef.current;
//         if(!dock) return ()=>{};

//         const icons = dock.querySelectorAll('.dock-icon')

//         const animateIcons = (mouseX)=>{
//             const {left} = dock.getBoundingClientRect()

//             icons.forEach((icon)=>{
//                 const {left: iconLeft, width: w} = icon.getBoundingClientRect()

//                 const center = iconLeft - left + w/2;
//                 const distance = Math.abs(mouseX - center)

//                 const intensity = Math.exp(-(distance **2.7) / 20000)

//                 gsap.to(icon,{
//                     scale: 1 + 0.25 * intensity,
//                     y: -15 * intensity,
//                     duration: 0.2,
//                     ease: 'power1.out'
//                 })
//             })
//         }

//         const handleMouseMove = (e) => {
//             const {left} = dock.getBoundingClientRect()
//             animateIcons(e.clientX - left)
//         }
//         const resetIcon = () =>
//           gsap.to(icons, {
//             scale: 1,
//             y: 0,
//             duration: 0.3,
//             ease: 'power1.out',
//           });
        

//         // const resetIcon = ()=> icons.forEach((icon)=>gsap.to(icons, {
//         //     scale:1,
//         //     y: 0,
//         //     duration: 0.3,
//         //     ease: 'power1.out'
//         // }))
//               dock.addEventListener('mousemove', handleMouseMove);
//               dock.addEventListener('mouseleave', resetIcon);

//               return () => {
//                 dock.removeEventListener('mousemove', handleMouseMove);
//                 dock.removeEventListener('mouseleave', resetIcon);
//               };

//     },[])


//   return (
//     <section id='dock'>
//         <div ref={dockRef} className="dock-container">
//            {dockApps.map(({id,name,icon,canOpen})=>(
//             <div key={id} className="relative flex justify-center">
//                 <button 
//                 type="button" 
//                 className="dock-icon" 
//                 aria-label={name}
//                 data-tooltip-id='dock-tooltip'
//                 data-tooltip-content={name}
//                 data-tooltip-delay-show={150}
//                 disabled={!canOpen}
//                 onClick={()=> handleClick({id, canOpen})}
//                 >
//                     <img 
//                     src={`/images/${icon}`} 
//                     alt={id ?? name} 
//                     loading="lazy"
//                     className={canOpen ? '' : 'opacity-60'} />
//                 </button>
//             </div>
//            ))}
//            <Tooltip className='tooltip' place='top' id='dock-tooltip' />
//         </div>
//     </section>
//   )
// }

// export default Dock
import { useRef } from 'react';
import { dockApps, locations } from '#constants';
import { Tooltip } from 'react-tooltip';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef(null);

  const { setActiveLocation } = useLocationStore();

  const handleClick = (app) => {
    if (!app.canOpen) return;

    if (app.id === 'trash') {
      const window = windows['finder'];
      setActiveLocation(locations.trash);
      
      if (window?.isOpen) {
        openWindow('finder'); 
      } else {
        openWindow('finder');
      }
      return;
    }

    const window = windows[app.id];

    if (!window){
        console.log(`The specified window ${app.id}: is not found`)
    }

    if (window?.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return () => {};

    const icons = dock.querySelectorAll('.dock-icon');

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width: w } = icon.getBoundingClientRect();

        const center = iconLeft - left + w / 2;
        const distance = Math.abs(mouseX - center);

        // Calculate intensity based on distance from mouse
        const intensity = Math.exp(-(distance ** 2.7) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: 'power1.out',
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcon = () =>
      gsap.to(icons, {
        // Fixed GSAP call
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power1.out',
      });

    // Add event listeners (fixed implementation)
    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener('mouseleave', resetIcon);

    return () => {
      // Remove event listeners during cleanup
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener('mouseleave', resetIcon);
    };
  }, []);

  return (
    <section id='dock'>
      <div ref={dockRef} className='dock-container'>
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className='relative flex justify-center'>
            <button
              type='button'
              className='dock-icon'
              aria-label={name}
              data-tooltip-id='dock-tooltip'
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => handleClick({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading='lazy'
                className={canOpen ? '' : 'opacity-60'} // Fixed Tailwind typo
              />
            </button>
          </div>
        ))}
        <Tooltip className='tooltip' place='top' id='dock-tooltip' />
      </div>
    </section>
  );
};

export default Dock;
