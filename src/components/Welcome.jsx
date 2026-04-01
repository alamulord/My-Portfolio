import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useRef } from 'react';

const AnimatedText = (text, className, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={`${className} inline-block`}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

const FONT_WEIGHT = {
  subtitle: { min: 200, max: 400, default: 200 },
  title: { min: 400, max: 900, default: 400 },
};

const HoveredText = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll('span');

  const { min, max, default: base } = FONT_WEIGHT[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: 'power2.out',
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const mouseX = e.clientX; // e.clientX is relative to the viewport
    letters.forEach((letter) => {
      // letter's left is also relative to the viewport
      const { left, width } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (left + width / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = (e) =>
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.3);
    });

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanUp = HoveredText(titleRef.current, 'title');
    const subtitleCleanUp = HoveredText(subtitleRef.current, 'subtitle');

    return () => {
      if (titleCleanUp) titleCleanUp();
      if (subtitleCleanUp) subtitleCleanUp();
    };
  }, []);

  return (
    <section id='welcome'>
      <p ref={subtitleRef} className='title'>
        {AnimatedText(
          "Hey, I'm Abdulsamad Aliyu Ayomide, Welcome to my",
          'text-3xl font-georama',
          100,
        )}
      </p>
      <h1 ref={titleRef} className='mt-7'>
        {AnimatedText('portfolio', 'text-9xl font-bold font-georama')}
      </h1>


    </section>
  );
};

export default Welcome;
