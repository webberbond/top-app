import { useScrollY } from '@/hooks/useScrollY';
import styles from './Up.module.css';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = () => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon
        appearance="primary"
        icon="up"
        aria-label="Наверх"
        onClick={scrollToTop}
      />
    </motion.div>
  );
};
