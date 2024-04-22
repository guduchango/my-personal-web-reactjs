import { useContext, useEffect } from 'react'
import Layout from '../../Components/Layout'
import { GlobalContext } from '../../Context'
import './styles.css'

const Education = () => {

    const context = useContext(GlobalContext);
    const items = context.educationInfo;

    return (
        <Layout>
            <section aria-labelledby="education">
                <div className="section-wrapper">
                    <h2>Education</h2>
                    <div className="education-boxes boxes-color">
                        {items.map((item, index) => (
                            <div key={index} className="educationBoxes-box">
                                <span>{item.year}</span>
                                <div className="educationBoxesBox-icon">
                                    <a target="_blank" href={item.certificate_url} >
                                        <i className="icon-download2"></i>
                                    </a>
                                    <p>{item.title}</p>
                                </div>
                                <span>{item.place}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Education