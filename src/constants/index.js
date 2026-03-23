const navLinks = [
  {
    id: 1,
    name: 'Projects',
    type: 'finder',
  },
  {
    id: 3,
    name: 'Contact',
    type: 'contact',
  },
  {
    id: 4,
    name: 'Resume',
    type: 'resume',
  },
];

const navIcons = [
  {
    id: 1,
    img: '/icons/wifi.svg',
  },
  {
    id: 2,
    img: '/icons/search.svg',
  },
  {
    id: 3,
    img: '/icons/user.svg',
  },
  {
    id: 4,
    img: '/icons/mode.svg',
  },
];

const dockApps = [
  {
    id: 'finder',
    name: 'Portfolio', // was "Finder"
    icon: 'finder.png',
    canOpen: true,
  },
  {
    id: 'safari',
    name: 'Articles', // was "Safari"
    icon: 'safari.png',
    canOpen: true,
  },
  {
    id: 'photos',
    name: 'Gallery', // was "Photos"
    icon: 'photos.png',
    canOpen: true,
  },
  {
    id: 'contact',
    name: 'Contact', // or "Get in touch"
    icon: 'contact.png',
    canOpen: true,
  },
  {
    id: 'terminal',
    name: 'Skills', // was "Terminal"
    icon: 'terminal.png',
    canOpen: true,
  },
  {
    id: 'trash',
    name: 'Archive', // was "Trash"
    icon: 'trash.png',
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: 'Sep 2, 2025',
    title:
      'TypeScript Explained: What It Is, Why It Matters, and How to Master It',
    image: '/images/blog1.png',
    link: 'https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it',
  },
  {
    id: 2,
    date: 'Aug 28, 2025',
    title: 'The Ultimate Guide to Mastering Three.js for 3D Development',
    image: '/images/blog2.png',
    link: 'https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development',
  },
  {
    id: 3,
    date: 'Aug 15, 2025',
    title: 'The Ultimate Guide to Mastering GSAP Animations',
    image: '/images/blog3.png',
    link: 'https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations',
  },
];

const techStack = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'Sass', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Hono', 'Python'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Dev Tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
];

const socials = [
  {
    id: 1,
    text: 'Github',
    icon: '/icons/github.svg',
    bg: '#f4656b',
    link: 'https://github.com/alamulord',
  },
  {
    id: 2,
    text: 'Platform',
    icon: '/icons/atom.svg',
    bg: '#4bcb63',
    link: 'https://dev.to/alamulord',
  },
  {
    id: 3,
    text: 'Twitter/X',
    icon: '/icons/twitter.svg',
    bg: '#ff866b',
    link: 'https://x.com/alamulord',
  },
  {
    id: 4,
    text: 'LinkedIn',
    icon: '/icons/linkedin.svg',
    bg: '#05b6f6',
    link: 'https://www.linkedin.com/in/aliyu-a-ayomide/',
  },
];

const photosLinks = [
  {
    id: 1,
    icon: '/icons/gicon1.svg',
    title: 'Library',
  },
  {
    id: 2,
    icon: '/icons/gicon2.svg',
    title: 'Memories',
  },
  {
    id: 3,
    icon: '/icons/file.svg',
    title: 'Places',
  },
  {
    id: 4,
    icon: '/icons/gicon4.svg',
    title: 'People',
  },
  {
    id: 5,
    icon: '/icons/gicon5.svg',
    title: 'Favorites',
  },
];

const gallery = [
  {
    id: 1,
    img: '/images/gal8.jpeg',
  },
  {
    id: 2,
    img: '/images/gal2.jpg',
  },
  {
    id: 3,
    img: '/images/gal5.jpg',
  },
  {
    id: 4,
    img: '/images/gal6.png',
  },
  {
    id: 5,
    img: '/images/gal4.jpg',
  },
  {
    id: 7,
    img: '/images/gal3.jpg',
  },
  {
    id: 8,
    img: '/images/gal7.jpg',
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: 'work',
  name: 'Work',
  icon: '/icons/work.svg',
  kind: 'folder',
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: 'Study Space Finder',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-[40px] left-[40px]', // icon position inside Finder
      windowPosition: 'top-[5vh] right-5', // optional: Finder window position
      children: [
        {
          id: 1,
          name: 'Study Space Finder Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: [
            'study space finder is a platform that helps students find study spaces.',
            'instead of going to the library to find a study space, you can find a study space using this system.',
            'think of it like a virtual library that helps you find a study space.',
            "It's built with reactjs and tailwindcss, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: 'study-space-finder.vercel.app',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://study-space-finder.vercel.app/',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'study-space-finder.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/study-space-finder.png',
        },
        // {
        //   id: 5,
        //   name: 'Design.fig',
        //   icon: '/images/plain.png',
        //   kind: 'file',
        //   fileType: 'fig',
        //   href: 'https://google.com',
        //   position: 'top-60 right-20',
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: 'paysheild ai fraud detection system',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-[40px] left-[200px]',
      windowPosition: 'top-[5vh] left-5',
      children: [
        {
          id: 1,
          name: 'paysheild ai fraud detection system Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 right-10',
          description: [
            'paysheild ai fraud detection system helps detect fraud in transactions.',
            'Instead of going to the bank to report fraud, you can report fraud using this system or detect fraud using this system.',
            'think of it as a virtual bank that helps detect anonymous transactions and prevent fraud.',
            "It's built with, Nextjs, Python and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: 'paysheild-ai-fraud-detection-system.vercel.app',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://paysheild-ai-fraud-detection-system.vercel.app/',
          position: 'top-20 left-20',
        },
        {
          id: 4,
          name: 'paysheild.jpeg',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 left-80',
          imageUrl: '/images/paysheild.jpeg',
        },
        // {
        //   id: 5,
        //   name: 'Design.fig',
        //   icon: '/images/plain.png',
        //   kind: 'file',
        //   fileType: 'fig',
        //   href: 'https://google.com',
        //   position: 'top-60 left-5',
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: 'friendly dev frontend flame',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-[40px] left-[360px]',
      windowPosition: 'top-[18vh] left-5',
      children: [
        {
          id: 1,
          name: 'friendly dev frontend flame Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: [
            'Friendly dev frontend flame is a small design of a frontend developer portfolio.',
            'It’s built with React and Tailwind, so it works smoothly on both iOS and Android with a clean, modern design.',
          ],
        },
        {
          id: 2,
          name: 'friendly-dev-frontend-flame.vercel.app',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://friendly-dev-frontend-flame.vercel.app/',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'friendly-dev.jpeg',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/friendly-dev.jpeg',
        },
        // {
        //   id: 5,
        //   name: 'Design.fig',
        //   icon: '/images/plain.png',
        //   kind: 'file',
        //   fileType: 'fig',
        //   href: 'https://google.com',
        //   position: 'top-60 right-20',
        // },
      ],
    },
    {
      id: 8,
      name: 'my crypto dash',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-[200px] left-[40px]',
      windowPosition: 'top-[15vh] right-5',
      children: [
        {
          id: 1,
          name: 'my-crypto-dash Project.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          description: [
            'Our my-crypto-dash is a fast and convenient way to track your crypto.',
            'Instead of going to other crypto websites to check your crypto, you can check it all in one place.',
            'Think of it like having your favorite crypto websites in your pocket—ready to deliver anytime, anywhere.',
            'It’s built with React, so it works smoothly on both ios/android devices and on the web with a clean, modern design.',
          ],
        },
        {
          id: 2,
          name: 'my-crypto-dash.vercel.app',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://my-crypto-dash.vercel.app/',
          position: 'top-10 right-20',
        },
        {
          id: 4,
          name: 'crypto-dash.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/crypto-dash.jpeg',
        },
        // {
        //   id: 5,
        //   name: 'Design.fig',
        //   icon: '/images/plain.png',
        //   kind: 'file',
        //   fileType: 'fig',
        //   href: 'https://google.com',
        //   position: 'top-60 right-20',
        // },
      ],
    },
    
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: 'about',
  name: 'About me',
  icon: '/icons/info.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-5',
      imageUrl: '/images/abdulsamad.png',
    },
    {
      id: 2,
      name: 'casual-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-28 right-72',
      imageUrl: '/images/gal1.jpg',
    },
    {
      id: 3,
      name: 'Colleagues-me.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-52 left-80',
      imageUrl: '/images/gal8.jpeg',
    },
    {
      id: 4,
      name: 'about-me.txt',
      icon: '/images/txt.png',
      kind: 'file',
      fileType: 'txt',
      position: 'top-60 left-5',
      subtitle: 'Meet the Developer Behind the Code',
      image: '/images/abdulsamad.png',
      description: [
        'Hey! I’m Abdulsamad Ayomide Aliyu 👋, a web developer who enjoys building sleek, interactive websites that actually work well.',
        'I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.',
        'I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.',
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping hot tea, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: 'resume',
  name: 'Resume',
  icon: '/icons/file.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Myresume.pdf',
      icon: '/images/pdf.png',
      kind: 'file',
      fileType: 'pdf',
      pdfSrc: 'local', // signals Resume.jsx to use the local import
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: 'trash',
  name: 'Trash',
  icon: '/icons/trash.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'trash1.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-10',
      imageUrl: '/images/trash-1.png',
    },
    {
      id: 2,
      name: 'trash2.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-40 left-80',
      imageUrl: '/images/trash-2.png',
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
