import { useState, useEffect } from 'react';

export const useYScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollY,
  };
};
