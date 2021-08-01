import React from 'react';
import styles from './Auth.module.scss';
import Auth from './Auth';
function Index() {
  return (
    <div className={styles.modalBack}>
      <Auth />
    </div>
  );
}

export default Index;
