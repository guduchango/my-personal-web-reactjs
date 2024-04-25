
import { useContext, useEffect } from 'react';
import Layout from '../../Components/Layout'
import './styles.css'
import { GlobalContext } from '../../Context';

const Home = () => {

    const context = useContext(GlobalContext);
    const items = context.skillInfo;

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
                {items.map((item, index) => (
                    <div key={index} className="aboutMeBoxes-details">
                        <div className="aboutMeBoxesDetails-title">
                            <span>{item.title}</span>
                        </div>
                        <div className="aboutMeBoxesDetails-tags">
                        {item.tags.map((it, ix) => (
                            <span key={ix}>{it}</span>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            </section>
        </Layout>
    )
}

export default Home