import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { userSelector } from '@/store/selectors/userSelector';

import styles from './NavigatonBar.module.scss';

interface NavigationBarProps {
  onLinkClick?: () => void;
}

export const NavigationBar = ({ onLinkClick }: NavigationBarProps) => {
  const { user } = useSelector(userSelector);

  const onNavLinkClick = () => {
    onLinkClick?.();
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to='/'
            className={(active) =>
              `${styles.navItem} ${active.isActive && styles.activeLink}`
            }
            onClick={onNavLinkClick}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to='/timeline'
            className={(active) =>
              `${styles.navItem} ${active.isActive && styles.activeLink}`
            }
            onClick={onNavLinkClick}
          >
            Timeline
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to='/bank-card'
            className={(active) =>
              `${styles.navItem} ${active.isActive && styles.activeLink}`
            }
            onClick={onNavLinkClick}
          >
            Bank card
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to='/contacts'
            className={(active) =>
              `${styles.navItem} ${active.isActive && styles.activeLink}`
            }
            onClick={onNavLinkClick}
          >
            Contacts
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to={user ? '/account' : '/login'}
            className={(active) =>
              `${styles.navItem} ${active.isActive && styles.activeLink}`
            }
            onClick={onNavLinkClick}
          >
            {user ? 'Account' : 'Login'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
