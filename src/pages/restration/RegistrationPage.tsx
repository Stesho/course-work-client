import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/Button/Button';
import { userRegistration } from '@/services/user/userRegistration';

import styles from './RegistrationPage.module.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    userRegistration({
      username,
      password,
    })
      .then((user) => {
        if (user) {
          setIsError(false);
          navigate('/account');
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return (
    <div className={`${styles.registration} container`}>
      <div>{isError && <span>User already exist!</span>}</div>
      <div className={styles.section}>
        <span>Username</span>
        <input value={username} onChange={onChangeUsername} type='text' />
      </div>
      <div className={styles.section}>
        <span>Password</span>
        <input value={password} onChange={onChangePassword} type='text' />
      </div>
      <Button onClick={onSubmit}>Registration</Button>
    </div>
  );
};

export default LoginPage;
