import './styles.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Layout from '../../Components/Layout'
import LayoutWrapper from '../../Components/LayoutWrapper'


const AppRoutes = () => {

  let routes = useRoutes([
    // { path: '/', element: <Chango /> },
    // { path: '/*', element: <NotFound /> },
  ])

  return routes
}


function App() {

  return (
    <>
      <BrowserRouter>
      <AppRoutes />
      <Layout />
      <LayoutWrapper />
      </BrowserRouter>
    </>
  )
}

export default App
