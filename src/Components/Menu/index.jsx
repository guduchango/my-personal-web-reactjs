import { NavLink } from 'react-router-dom'
import './styles.css'
const Menu = () => {
    const activeStyle = 'menuWrapperBox-isActive'

    return (
        <div className="menu">
            <div className="menu-wrapper">
                <NavLink to='/'>
                    <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                        <i className="icon-home"></i>
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink to='/experience'>
                    <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                            <i className="icon-file-text"></i>
                            <span>Experience</span>
                    </div>
                </NavLink>
                <NavLink to='/education'>
                    <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                        <i className="icon-shield"></i>
                        <span>Education</span>
                    </div>
                </NavLink>
                <NavLink to='/project'>
                    <div className={`${({ isActive }) => isActive ? activeStyle : undefined} menuWrapper-box`}>
                        <i className="icon-laptop"></i>
                        <span>Project</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu