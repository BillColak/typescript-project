'use client';

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';


interface DataContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}


const DataContext = createContext<DataContextProps>({
  userId: '',
  setUserId: (): string => '',
})

export const DataProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {

  }, []);


  return (
    <DataContext.Provider value={{userId, setUserId}}>
      {children}
    </DataContext.Provider>
  )
}

function useDataProvider(): DataContextProps {
  const context = useContext(DataContext);
  if (!context) throw new Error('useDataProvider must be used within a DataProvider' + window.location.pathname.toString());
  return context;
}
