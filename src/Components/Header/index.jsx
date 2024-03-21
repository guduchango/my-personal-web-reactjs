import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <nav>

                <NavLink to='/'>
                    <div className="nav-box" title="home">
                        <i className="icon-home"></i>
                    </div>
                </NavLink>
                <NavLink to='/experience'>
                    <div className="nav-box" title="experience">
                        <i className="icon-file-text"></i>
                    </div>
                </NavLink>
                <NavLink to='/education'>
                    <div className="nav-box" title="education">
                        <i className="icon-shield"></i>
                    </div>
                </NavLink>
                <NavLink to='/project'>
                    <div className="nav-box" title="projects">
                        <i className="icon-laptop"></i>
                    </div>
                </NavLink>

            </nav>
        </header>
    )
}

export default Header