import './styles.css'

const Main = () => {
    return (
        <main>
            <div className="main-wrapper">
                <a href="/" aria-current="page">
                    <img src="../../../src/assets/images/chango.jpeg" width="256" height="256" alt="Foto edgardo ponce" />
                </a>
                <h1>Edgardo Ponce</h1>
                <h2>Full Stack Developer</h2>
                <div className="mainWrapper-socialIcons" aria-labelledby="social networks">
                    <a target="_blank"
                        href="https://www.linkedin.com/in/edgardo-dami%C3%A1n-ponce-p%C3%A1ez-b9069470/">
                        <i className="icon-linkedin" aria-hidden="true"></i>
                    </a>
                    <a target="_blank" href="https://github.com/guduchango">
                        <i className="icon-github" aria-hidden="true"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/edgardo__ponce">
                        <i className="icon-twitter" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="mainWrapper-personalInfo" aria-labelledby="personal info">
                    <div className="mainWrapperPersonalInfo-item">
                        <div className="mainWrapperPersonalInfoItem-icon">
                            <i className="icon-link"></i>
                        </div>
                        <div className="mainWrapperPersonalInfoItem-text">
                            <p>Web</p>
                            <p>edgardoponce.com</p>
                        </div>
                    </div>
                    <div className="mainWrapperPersonalInfo-item">
                        <div className="mainWrapperPersonalInfoItem-icon">
                            <i className="icon-location"></i>
                        </div>
                        <div className="mainWrapperPersonalInfoItem-text">
                            <p>Location</p>
                            <p>San Rafael, Mendoza, Argentina</p>
                        </div>
                    </div>
                    <div className="mainWrapperPersonalInfo-item">
                        <div className="mainWrapperPersonalInfoItem-icon">
                            <i className="icon-mail"></i>
                        </div>
                        <div className="mainWrapperPersonalInfoItem-text">
                            <p>Email</p>
                            <p>ed.poncepaez@gmail.com</p>
                        </div>
                    </div>
                    <div className="mainWrapperPersonalInfo-item">
                        <div className="mainWrapperPersonalInfoItem-icon">
                            <i className="icon-calendar"></i>
                        </div>
                        <div className="mainWrapperPersonalInfoItem-text">
                            <p>Birthday</p>
                            <p>July 19, 1987</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
export default Main