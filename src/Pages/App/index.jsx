import './styles.css'
import {createHashRouter } from 'react-router-dom'
import Home from '../Home'
import Experience from '../Experience'
import Education from '../Education'
import Project from '../Project'
import { GlobalContextProvider } from '../../Context'
import { RouterProvider } from "react-router-dom";

const router = createHashRouter([
    { path: '/', element: <Home /> },
    { path: '/experience', element: <Experience /> },
    { path: '/education', element: <Education /> },
    { path: '/project', element: <Project /> },
  ])

function App() {

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  )
}

export default App
