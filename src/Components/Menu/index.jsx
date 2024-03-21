import { NavLink } from 'react-router-dom'
import './styles.css'
const Menu = () => {
    
    return (
        <div className="menu">
            <div className="menu-wrapper">
                <NavLink to='/' className={({ isActive }) => (isActive ? 'menuWrapperBox-isActive' : 'menuWrapper-box')}>
                    <i className="icon-home"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/experience' className={({ isActive }) => (isActive ? 'menuWrapperBox-isActive' : 'menuWrapper-box')}>
                    <i className="icon-file-text"></i>
                    <span>Experience</span>
                </NavLink>
                <NavLink to='/education' className={({ isActive }) => (isActive ? 'menuWrapperBox-isActive' : 'menuWrapper-box')}>
                    <i className="icon-shield"></i>
                    <span>Education</span>
                </NavLink>
                <NavLink to='/project' className={({ isActive }) => (isActive ? 'menuWrapperBox-isActive' : 'menuWrapper-box')}>
                    <i className="icon-laptop"></i>
                    <span>Project</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu