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
  // add your context properties here because TypeScript...

}


const DataContext = createContext<DataContextProps>({
  userId: '',
  setUserId: (): string => '',
  // add your default value here

})

export const DataProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    // add your logic to update states here
  }, [
    // add your dependencies to re-run the effect here

  ]);


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
