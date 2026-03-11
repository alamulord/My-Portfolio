import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';

const WindowWrapper = (Component, windowKey) => {
  const wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMaximized } = windows[windowKey];
    const refs = useRef(null);

    useGSAP(() => {
      const el = refs.current;
      if (!el) return;

      if (isMaximized) {
        gsap.to(el, { scale: 1.25, duration: 0.4, ease: 'power3.out' });
      } else {
        gsap.to(el, { scale: 1, duration: 0.4, ease: 'power3.out' });
      }
    }, [isMaximized]);

    const isFirstRender = useRef(true);

    useGSAP(() => {
      const el = refs.current;
      if (!el) return;

      el.style.display = 'block';

      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.8,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        },
      );
    }, [isOpen]);

    // implementing draggable feature to all the tabs/windows
    useGSAP(() => {
      const el = refs.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        type: 'x,y',
        trigger: el.querySelector('#window-header'), // Scope this only to select the focus window controls for dagging
        bounds: window, 
        // Optional: keeps the window within the viewport

        // const [instance] = Draggable.create(el, {
        //   type: 'x,y',
        //   trigger: '#window-header', // This ensures dragging only starts from the top bar
        //   bounds: window, // Optional: keeps the window within the viewport
        //   onPress: () => {
        //     focusWindow(windowKey);
        //   },
        // });



        onPress: () => {
          focusWindow(windowKey);
        },
      });

      return () => {
        instance.kill();
      };
    }, []);

    useLayoutEffect(() => {
      const el = refs.current;
      if (!el) return;

      el.style.display = isOpen ? 'block' : 'none';
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={refs}
        style={{ zIndex }}
        className={`absolute bg-white shadow-2xl drop-shadow-2xl rounded-xl border border-gray-200/50 ${!isMaximized ? 'resizable-window' : ''}`}
        onPointerDown={() => focusWindow(windowKey)}
      >
        <Component {...props} />
        {!isMaximized && <div className="resize-handle" />}
      </section>
    );
  };
  wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name} || 'Component')`;
  return wrapped;
};

export default WindowWrapper;
