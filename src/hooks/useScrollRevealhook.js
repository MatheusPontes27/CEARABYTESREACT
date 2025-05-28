import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = ({ y = 100, start = 'top 80%', end = 'bottom 60%' } = {}) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const anim = gsap.fromTo(el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          toggleActions: 'restart none none none', // <- aqui está o segredo
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [y, start, end]);

  return ref;
};

export default useScrollReveal;