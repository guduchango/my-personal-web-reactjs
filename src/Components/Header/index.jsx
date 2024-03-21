import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'navBox-isActive' : 'nav-box')}>
                    <i className="icon-home"></i>
                </NavLink>
                <NavLink to='/experience' className={({ isActive }) => (isActive ? 'navBox-isActive' : 'nav-box')}>
                    <i className="icon-file-text"></i>
                </NavLink>
                <NavLink to='/education' className={({ isActive }) => (isActive ? 'navBox-isActive' : 'nav-box')}>
                    <i className="icon-shield"></i>
                </NavLink>
                <NavLink to='/project' className={({ isActive }) => (isActive ? 'navBox-isActive' : 'nav-box')}>
                   <i className="icon-laptop"></i>
                </NavLink>

            </nav>
        </header>
    )
}

export default Header