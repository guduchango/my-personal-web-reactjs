import { useContext } from 'react'
import { GlobalContext } from '../../Context'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'
import Menu from '../Menu'
import './styles.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'



const Layout = ({ children }) => {

    const context = useContext(GlobalContext);
    const { width } = useWindowDimensions();
    const mobileWidthMediaQuery = 900;
    const homePage = 'home';

    const showHeader = () => {
        return (context.navSection === homePage 
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