import { useContext } from 'react'
import { GlobalContext } from '../../Context'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'
import Menu from '../Menu'
import './styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { useLocation } from 'react-router-dom'



const Layout = ({ children }) => {

    const { width } = useWindowDimensions();
    const mobileWidthMediaQuery = 900;
    const homePage = '/';
    const location = useLocation(); 

    const showHeader = () => {
        return (location === homePage 
        && width <= mobileWidthMediaQuery) 
        || width >= mobileWidthMediaQuery 
    }
    
    return (
        <div className="layout">
            <div className="layout-wrapper">
                <Header />
                { ((showHeader() && <Main /> ))}
                <Menu /> 
                <section aria-labelledby="about me">
                    <div className="section-wrapper">
                        {children}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Layout