import { animated, useTransition } from '@react-spring/web';
import { useState } from 'react';
import styles from './Welcome.module.css';
import logoPtBr from '../../assets/logo-ptbr.svg';
import logoJp from '../../assets/logo-jp.svg';
import logoKr from '../../assets/logo-kr.svg';
import logoCh from '../../assets/logo-ch.svg';
import opening from '../../../public/opening.jpg';
import fuji from '../../../public/fuji.jpg';
import korea from '../../../public/korea.jpg';
import china from '../../../public/china.jpg';
import { Button } from '@mui/material';

const imgs = [opening, fuji, korea, china];
const logos = [logoPtBr, logoJp, logoKr, logoCh];
const textButton = ['Entrar', '入口', '입구', '入口'];

export const Welcome = () => {
  const [index, set] = useState(0);

  const transitionsImgs = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 4000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % logos.length);
      }
    },
    exitBeforeEnter: true,
  });

  const transitionsLogos = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 4000 },
    exitBeforeEnter: true,
  });

  const transitionsBtn = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 4000 },
    exitBeforeEnter: true,
  });

  return (
    <div className={styles.container}>
      {transitionsImgs((style, i) => (
        <animated.div
          className={styles.imgs}
          style={{
            ...style,
            backgroundImage: `url(${imgs[i]})`,
          }}
        >
          {transitionsLogos((styleLogo, j) => (
            <animated.div
              className={styles.logos}
              style={{
                ...styleLogo,
                backgroundImage: `url(${logos[j]})`,
              }}
            />
          ))}
        </animated.div>
      ))}
      {transitionsBtn((styleBtn, k) => (
        <animated.div className={styles.btn} style={{ ...styleBtn }}>
          <Button
            sx={{
              background: '#700917',
              color: '#FFFFB7',
              fontFamily: 'Sawarabi Mincho", serif',
            }}
            variant="outlined"
          >
            {textButton[k]}
          </Button>
        </animated.div>
      ))}
      <div className={styles.btn}></div>
    </div>
  );
};
