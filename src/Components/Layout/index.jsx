import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'
import Menu from '../Menu'
import './styles.css'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="layout-wrapper">
                <Header />
                <Main />
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