import './styles.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Experience from '../Experience'
import Education from '../Education'
import Project from '../Project'
import { GlobalContextProvider } from '../../Context'

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/experience', element: <Experience /> },
    { path: '/education', element: <Education /> },
    { path: '/project', element: <Project /> },
  ])

  return routes
}


function App() {

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
