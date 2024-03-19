
import { createContext, useState } from 'react';
import infoJson from '../assets/jsonFiles/info.json'
import { InfoWeb } from '../utils';
export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const infoWeb = new InfoWeb(infoJson)

   /* Read json file from local */
  const [educationInfo] = useState(infoWeb.getEducationInfo())
  const [projectInfo] = useState(infoWeb.getProjectInfo())
  const [experienceInfo] = useState(infoWeb.getExperienceInfo())
  const [skillInfo] = useState(infoWeb.getSkillInfo())


  return (
    <GlobalContext.Provider value={{
     educationInfo,
     projectInfo,
     experienceInfo,
     skillInfo
    }}>
      {children}
    </GlobalContext.Provider>
  )

}