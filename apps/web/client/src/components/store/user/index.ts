
import { createContext, useContext } from 'react';
import { UserManager } from './manager';

const userManager = new UserManager();
const UserManagerContext = createContext(userManager);
export const useUserManager = () => useContext(UserManagerContext);

export { userManager };
