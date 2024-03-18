import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="nav-box" title="home">
                    <a id="mobileHomeIcon-btn" href="#">
                        <i className="icon-home" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="nav-box" title="experience">
                    <a id="experienceHomeIcon-btn" href="#">
                        <i className="icon-file-text" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="nav-box" title="education">
                    <a id="educationHomeIcon-btn" href="#">
                        <i className="icon-shield" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="nav-box" title="projects">
                    <a id="projectsHomeIcon-btn" href="#">
                        <i className="icon-laptop" aria-hidden="true"></i>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header