import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '@/store/selectors/userSelector';

import styles from './Overview.module.scss';

export const Overview = () => {
  const { user } = useSelector(userSelector);

  return (
    <section className={styles.authors}>
      <h2 className="accountPageTitle">Overview</h2>
      <h3>
        <span>Welcome, </span>
        <span className={styles.username}>{user?.username}</span>
      </h3>
    </section>
  );
};
