import { NavLink } from 'react-router-dom'
import './styles.css'
const Menu = () => {
    const activeStyle = 'menuWrapperBox-isActive'

    return (
        <div className="menu">
            <div className="menu-wrapper">
                <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                <NavLink to='/'>
                    <i className="icon-home"></i>
                </NavLink>
                <span>Home</span>
                </div>
                <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                <NavLink
                    to='/experience'>
                     <i className="icon-file-text"></i>
                </NavLink>
                <span>Experience</span>
                </div>
                <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                <NavLink
                    to='/education'>
                    <i className="icon-shield"></i>
                </NavLink>
                <span>Education</span>
                </div>
                <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                <NavLink
                    to='/project'>
                    <i className="icon-laptop"></i>
                </NavLink>
                <span>Project</span>
            </div>
            </div>
        </div>
    )
}

export default Menu