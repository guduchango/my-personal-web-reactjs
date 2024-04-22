
import { useContext, useEffect } from 'react';
import Layout from '../../Components/Layout'
import './styles.css'
import { GlobalContext } from '../../Context';

const Experience = () => {

    const context = useContext(GlobalContext);
    const items = context.experienceInfo;
    
    return (
        <Layout>
            <section  aria-labelledby="experience">
                <div className="section-wrapper">
                    <h2>Experience</h2>
                    <div className="experience-boxes boxes-color">
                        {items.map((item, index) => (
                            <div key={index} className="experienceBoxes-box">
                                <span>{item.year}</span>
                                <p>{item.title}</p>
                                <ul>
                                {item.task_list.map((it, ix) => (
                                    <li key={ix}>{it}</li>
                                    ))}
                                </ul>
                                <span>{item.place}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Experience