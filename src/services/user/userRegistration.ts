import { registration } from '@/api/user/registration';
import { setUser } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import { User } from '@/types/user';

export const userRegistration = async (user: User) => {
  try {
    const userData = await registration(user);

    if (userData) {
      store.dispatch(setUser(userData));
    }

    return userData;
  } catch (err) {
    console.log(err);
    return null;
  }
};
