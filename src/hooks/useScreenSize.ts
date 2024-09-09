import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [windowDimension, setWindowDimension] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  const updateSize = () => {
    setWindowDimension({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [windowDimension]);

  return { windowDimension };
};
