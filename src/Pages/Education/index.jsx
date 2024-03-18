
import Layout from '../../Components/Layout'
import './styles.css'

const Education = () => {
    return (
        <Layout>
            <section aria-labelledby="education">
                <div className="section-wrapper">
                    <h2>Education</h2>
                    <div className="education-boxes boxes-color">
                        <div className="educationBoxes-box">
                            <span>2019 - 2020</span>
                            <div className="educationBoxesBox-icon">
                                <a href="#" className="icon-checkmark"></a>
                                <p>Senior Programming Technician</p>
                            </div>
                            <span>National Technological University</span>
                        </div>
                        <div className="educationBoxes-box">
                            <span>2024</span>
                            <div className="educationBoxesBox-icon">
                                <a target="_blank" href="./files/certificates/curso-esencial-de-html-y-css.pdf"
                                    className="icon-download2"></a>
                                <p>Essential Course HTML & CSS</p>
                            </div>
                            <span>leonidasesteban.com</span>
                        </div>
                        <div className="educationBoxes-box">
                            <span>2024</span>
                            <div className="educationBoxesBox-icon">
                                <a target="_blank" href="./files/certificates/curso-de-css-grid-layout-e-interfaces.pdf"
                                    className="icon-download2"></a>
                                <p>CSS Course Grid Layout and Interfaces</p>
                            </div>
                            <span>leonidasesteban.com</span>
                        </div>
                        <div className="educationBoxes-box">
                            <span>2024</span>
                            <div className="educationBoxesBox-icon">
                                <a target="_blank" href="./files/certificates/diploma-tailwind.pdf"
                                    className="icon-download2"></a>
                                <p>TailwindCss</p>
                            </div>
                            <span>platzi.com</span>
                        </div>
                        <div className="educationBoxes-box">
                            <span>2024</span>
                            <div className="educationBoxesBox-icon">
                                <a target="_blank" href="./files/certificates/diploma-react-vite-tailwindcss.pdf"
                                    className="icon-download2"></a>
                                <p>React.js with Vite.js and TailwindCss</p>
                            </div>
                            <span>platzi.com</span>
                        </div>
                        <div className="educationBoxes-box">
                            <span>2024</span>
                            <div className="educationBoxesBox-icon">
                                <a target="_blank" href="./files/certificates/diploma-react-typescript.pdf"
                                    className="icon-download2"></a>
                                <p>React.js with typescript</p>
                            </div>
                            <span>platzi.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Education