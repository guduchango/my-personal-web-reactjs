
import Layout from '../../Components/Layout'
import './styles.css'

const Home = () => {
    return (
        <Layout>
            <section aria-labelledby="about me">
            <div className="section-wrapper">
                <div className="aboutMe-info">
                    <h2>About Me</h2>
                    <p>I am a Full Stack developer with an innate passion for creating end-to-end technology
                        solutions. With over 12 years of experience in software development, I have had the
                        privilege of working on a variety of exciting and challenging projects. From designing
                        elegant user interfaces to implementing robust backend systems, I have excelled in all
                        aspects of the software development lifecycle.</p>
                    <h2>Skills</h2>
                </div>
                <div className="aboutMe-boxes boxes-color">
                    <div className="aboutMeBoxes-details">
                        <div className="aboutMeBoxesDetails-title">
                            <span>BACKEND</span>
                        </div>
                        <div className="aboutMeBoxesDetails-tags">
                            <span className='tag-cloud'>Laravel</span>
                            <span className='tag-cloud'>PHP</span>
                            <span className='tag-cloud'>NodeJs</span>
                            <span className='tag-cloud'>Javascript</span>
                            <span className='tag-cloud'>Java</span>
                            <span className='tag-cloud'>Kotlin</span>
                            <span className='tag-cloud'>Magento</span>
                            <span className='tag-cloud'>Typescript</span>
                        </div>
                    </div>
                    <div className="aboutMeBoxes-details">
                        <div className="aboutMeBoxesDetails-title">
                            <span>FRONTEND</span>
                        </div>
                        <div className="aboutMeBoxesDetails-tags">
                            <span>CSS</span>
                            <span>Grid</span>
                            <span>Flexbox</span>
                            <span>Tailwind</span>
                            <span>Semantic</span>
                            <span>Layout</span>
                            <span>React.js</span>
                            <span>Next.js</span>
                        </div>
                    </div>
                    <div className="aboutMeBoxes-details">
                        <div className="aboutMeBoxesDetails-title">
                            <span>SYSADMIN</span>
                        </div>
                        <div className="aboutMeBoxesDetails-tags">
                            <span>Linux</span>
                            <span>Docker</span>
                            <span>Docker Compose</span>
                            <span>Kubernetes</span>
                            <span>AWS</span>
                            <span>Apache</span>
                            <span>Nginx</span>
                            <span>ElasticSearch</span>
                            <span>MySql</span>
                            <span>BigQuery</span>
                        </div>
                    </div>
                    <div className="aboutMeBoxes-details">
                        <div className="aboutMeBoxesDetails-title">
                            <span>TOOLS</span>
                        </div>
                        <div className="aboutMeBoxesDetails-tags">
                            <span>JMeter</span>
                            <span>New Relic</span>
                            <span>PHP Storm</span>
                            <span>Vs Code</span>
                            <span>GIT</span>
                            <span>Jenkins</span>
                            <span>Cypress</span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </Layout>
    )
}

export default Home