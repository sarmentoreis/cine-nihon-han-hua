import { useTransition } from '@react-spring/web';
import { useState } from 'react';

export const useTransitionImgs = (imgs: string[]) => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 4000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        setIndex((state) => (state + 1) % imgs.length);
      }
    },
    exitBeforeEnter: true,
  });

  return { transitions, index };
};
