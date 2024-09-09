import { animated } from '@react-spring/web';
import styles from './Welcome.module.css';
import logoPtBr from '../../assets/logo-ptbr.svg';
import logoJp from '../../assets/logo-jp.svg';
import logoKr from '../../assets/logo-kr.svg';
import logoCh from '../../assets/logo-ch.svg';
import opening from '../../assets/opening.jpg';
import fuji from '../../assets/fuji.jpg';
import korea from '../../assets/korea.jpg';
import china from '../../assets/china.jpg';
import { Button } from '@mui/material';
import { useTransitionImgs } from '../../hooks/useTransitionImgs';
import { useTransitionLogos } from '../../hooks/useTransitionLogos';
import { useTransitionBtn } from '../../hooks/useTransitionBtn';

const imgs: string[] = [opening, fuji, korea, china];
const logos: string[] = [logoPtBr, logoJp, logoKr, logoCh];
const textButton: string[] = ['Entrar', '入口', '입구', '入口'];

export const Welcome = (): JSX.Element => {
  const { transitions: transitionsImgs } = useTransitionImgs(imgs);
  const { transitions: transitionsLogos } = useTransitionLogos(logos);
  const { transitions: transitionsBtn } = useTransitionBtn(textButton);

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
            href="/home"
            sx={{
              borderColor: '#700917',
              background: '#700917',
              color: '#FFFFB7',
              fontFamily: 'Sawarabi Mincho',
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
