import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {/*<li className={styles.toastWrapper}>*/}
      {/*  <Toast variant="notice">Example notice toast</Toast>*/}
      {/*</li>*/}
      {/*<li className={styles.toastWrapper}>*/}
      {/*  <Toast variant="error">Example error toast</Toast>*/}
      {/*</li>*/}
        {toasts.map((toast) => {
            return (
                <li className={styles.toastWrapper} key={toast.id}>
                    <Toast variant={toast.variant} handleDismiss={handleDismiss} id={toast.id}>{toast.message}</Toast>
                </li>
            )
        })}
    </ol>
  );
}

export default ToastShelf;
