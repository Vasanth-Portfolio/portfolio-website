import { useState, createContext, PropsWithChildren } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData.ts';
import { clientsData as clientsDataJson } from '../data/clientsData.ts';
import { ReactNode } from 'react';

export interface Bio {
  id: number;
  bio: string | ReactNode;
}

interface Client {
  id: number;
  title: string;
  img: string;
}

interface AboutMeContextType {
  aboutMe: Bio[];
  setAboutMe: React.Dispatch<React.SetStateAction<Bio[]>>;
  clientsHeading: string;
  clientsData: Client[];
  setClientsData: React.Dispatch<React.SetStateAction<Client[]>>;
}

export const AboutMeContext = createContext<AboutMeContextType>({
  aboutMe: [],
  setAboutMe: () => {},
  clientsHeading: '',
  clientsData: [],
  setClientsData: () => {}
});

export const AboutMeProvider = ({ children }: PropsWithChildren) => {
  const [aboutMe, setAboutMe] = useState<Bio[]>(aboutMeData);
  const clientsHeading = clientsPageHeading;
  const [clientsData, setClientsData] = useState<Client[]>(clientsDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        clientsHeading,
        clientsData,
        setClientsData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;