
import { createContext, useState } from 'react';
import infoJson from '../assets/jsonFiles/info.json'
import { InfoWeb } from '../utils';
export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const infoWeb = new InfoWeb(infoJson)

   /* Read json file from local */
  const [educationInfo] = useState(infoWeb.getEducationInfo())


  return (
    <GlobalContext.Provider value={{
     educationInfo,
    }}>
      {children}
    </GlobalContext.Provider>
  )

}