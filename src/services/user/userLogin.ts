import { login } from '@/api/user/login';
import { setUser } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import { User } from '@/types/user';

export const userLogin = async (user: User) => {
  try {
    const userData = await login(user);

    if (userData) {
      store.dispatch(setUser(userData));
    }

    return userData;
  } catch (err) {
    console.log(err);
    return null;
  }
};
