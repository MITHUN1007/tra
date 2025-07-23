
import { createContext, useContext } from 'react';
import { CreateManager } from './manager';

const createManager = new CreateManager();
const CreateManagerContext = createContext(createManager);
export const useCreateManager = () => useContext(CreateManagerContext);
