import { NavLink } from 'react-router-dom'
import './styles.css'

const Menu = () => {
    const activeStyle = 'isActive'

    return (
        <div className="menu">
            <div className="menu-wrapper">
                <div className="menuWrapper-box">
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    <i className="icon-home"></i>
                    Home
                </NavLink>
                </div>
                <div className="menuWrapper-box">
                <NavLink
                    to='/experience'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                     <i className="icon-file-text"></i>
                    Experience
                </NavLink>
                </div>
                <div className="menuWrapper-box">
                <NavLink
                    to='/education'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    <i className="icon-shield"></i>
                    Education
                </NavLink>
                </div>
                <div className="menuWrapper-box">
                <NavLink
                    to='/project'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    <i className="icon-laptop"></i>
                    Projects
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Menu