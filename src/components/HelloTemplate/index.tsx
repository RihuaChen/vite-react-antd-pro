import styles from './index.module.scss';

const HelloTemplate = () => {
  // cssModule convert to camelCase
  return <div className={styles.baseWrapper}>Hello Vite React Template !!!</div>;
};

export { HelloTemplate };
