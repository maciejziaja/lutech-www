import Image from 'next/image';
import styles from './social.module.css';

interface Props {
  url: string;
  name: string;
  description: string;
}

export const Social: React.FC<Props> = ({ url, name, description }) => (
  <a href={url} className={styles.link}>
    <Image src={`/social/${name}.svg`} width={32} height={32} className={styles.logo} alt={description}/>
  </a>
);
