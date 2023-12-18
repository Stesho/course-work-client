import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import styles from './AccountPage.module.scss';
// import AvailableFor from '../../components/availableFor/AvailableFor';

interface ActiveLink {
  isActive: boolean;
}

const AccountPage = () => {
  // const userStore = useStore('UserStore');
  // const navigate = useNavigate();
  //
  const setActiveLink = (active: ActiveLink) =>
    active.isActive
      ? `${styles.activeLink} ${styles.menuItem}`
      : styles.menuItem;

  // const logout = async () => {
  //   await userStore.logout();
  //   navigate(HOME_ROUTE);
  // };
  //
  // const fetchUser = async () => {
  //   await userStore.fetchUser();
  // };
  //
  // useEffect(() => {
  //   fetchUser();
  // }, []);
  //
  return (
    <div className={`${styles.account} container`}>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/account/overview" className={setActiveLink}>
            {/* <OverviewIcon className={styles.icon}/> */}
            <span>Account overview</span>
          </NavLink>
        </li>
        <div>
          <li>
            <NavLink to="/account/analysis" className={setActiveLink}>
              {/* <StatisticsIcon className={styles.icon}/> */}
              <span>Analysis</span>
            </NavLink>
          </li>
        </div>
        <li>
          <button
            type='button'
            className={`${styles.menuItem} ${styles.logoutBtn}`}
            // onClick={logout}
          >
            {/* <LogoutIcon className={styles.icon}/> */}
            <span>Logout</span>
          </button>
        </li>
      </ul>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
