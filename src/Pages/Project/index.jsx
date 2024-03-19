
import { useContext } from 'react';
import Layout from '../../Components/Layout'
import { GlobalContext } from '../../Context';
import './styles.css'

const Project = () => {

    const context = useContext(GlobalContext);
    const items = context.projectInfo;

    return (
        <Layout>
          <section aria-labelledby="projects">
                <div className="section-wrapper">
                    <h2>Projects</h2>
                    <div className="proyect-boxes boxes-color">
                    {items.map((item, index) => (
                        <div key={index} className="proyectBoxes-box">
                            <div className="proyectBoxesBox-header">
                                <div className="proyectBoxesBoxHeader-title">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="proyectBoxesBoxHeader-links">
                                    <a target="_blank"
                                        href={item.web_url}>
                                        <i className="icon-link"></i>
                                    </a>
                                    <a target="_blank" href={item.github_url}>
                                        <i className="icon-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="proyectBoxesBox-info">
                                <a target="_blank" href={item.image_url}>
                                    <img src={item.image_url} height="200" width="200"
                                        alt={item.alt} />
                                </a>
                                <ul>
                                    {item.detail_list.map((it, ix) => (
                                        <li key={ix}>{it}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Project