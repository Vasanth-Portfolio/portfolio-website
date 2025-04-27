import { useState, createContext, ReactNode, Dispatch, SetStateAction, JSX } from 'react';
import { SingleProjectData } from '../data/singleProjectData';

interface SingleProjectContextType {
  singleProjectData: SingleProjectData;
  setSingleProjectData: Dispatch<SetStateAction<SingleProjectData>>;
}

const SingleProjectContext = createContext<SingleProjectContextType | undefined>(undefined);

interface SingleProjectProviderProps {
  children: ReactNode;
  initialData: SingleProjectData;
}

export const SingleProjectProvider = ({ children, initialData }: SingleProjectProviderProps): JSX.Element => {
  const [singleProjectData, setSingleProjectData] = useState<SingleProjectData>(initialData);

  return (
    <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;