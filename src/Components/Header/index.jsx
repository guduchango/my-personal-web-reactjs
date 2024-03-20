import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="nav-box" title="home">
                    <NavLink to='/'>
                        <i className="icon-home"></i>
                    </NavLink>
                </div>
                <div className="nav-box" title="experience">
                    <NavLink to='/experience'>
                        <i className="icon-file-text"></i>
                    </NavLink>
                </div>
                <div className="nav-box" title="education">
                    <NavLink to='/education'>
                        <i className="icon-shield"></i>
                    </NavLink>
                </div>
                <div className="nav-box" title="projects">
                    <NavLink to='/project'>
                        <i className="icon-laptop"></i>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header