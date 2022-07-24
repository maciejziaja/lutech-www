import styles from './landing-info.module.css';
import config from '../../config/config';
import { Social } from '../social/social';

const socials = config.socials.map(social => <Social {...social} key={social.name} />);

export const LandingInfo = () => (
  <>
    <h1 className={styles.title}>Lu-Tech</h1>
    <p className={styles.text}>Hey guys, I&apos;m Maciej Ziaja.</p>
    <p className={styles.text}>I&apos;m software developer</p>
    <div className={styles.socials}>
      { socials }
    </div>
  </>
);
