import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        
        return(
            <section className="page-section" id="main">
                <link href='http://serve.fontsproject.com/css?family=Ozrad+CLM:700' rel='stylesheet' type='text/css'></link>
                <link href='http://serve.fontsproject.com/css?family=Journal+CLM:100' rel='stylesheet' type='text/css'></link>
                <div className="container">
                    <div className="text-center">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2 className="section-heading text-uppercase font-effect-shadow-multiple" id = "heading-override">...קצת עליי</h2>
                        <br/>
                        <h3 className="section-subheading text-muted" id = "subheader-override">אילוף ביתי, פנסיון, כלבנות טיפולית, קבוצות אילוף, ליווי חתונות</h3>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2018</h4>
                                    <h4 className="subheading">מאלפת כלבים מוסמכת בעלת התעודה בלהבלהבלה</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">פירוט על הקורס, ההכשרה היכולות וכו</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2019</h4>
                                    <h4 className="subheading">הקמת העסק? משו.. ציון דרך 2</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted"> פירוט על ציון דרך 2. בלה בלה בלה כותב פה הרבה כדי לדמות איך זה יראה כשזה בפסקה ולא סתם כמה מילים אז לורם איפסום דולור סיט אמט, קונסקטטור אדיפיסינג אליט. סאנט אוט וולפטטום איוס ספינטה. אני צריך ללמוד איך ליישר את הכל לימין, בהמשך </p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>דצמבר 2020</h4>
                                    <h4 className="subheading">קורס כלבנות טיפולית</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">פירוט בנוהל</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>יולי 2021</h4>
                                    <h4 className="subheading">ציון דרך 4, לא חייב כמובן</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">לורם איפסום בלה בלה </p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image" id="timeline-override">
                                <img className="rounded-circle img-fluid" src="assets/img/about/5.jpg" alt="..." />
                                <h4 id="centered-override">
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }

}

export default About;