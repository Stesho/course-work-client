import axios from 'axios';

import { User } from '@/types/user';

export const registration = async (user: User) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/user/registration',
      user,
    );

    if (!response) {
      return null;
    }

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
