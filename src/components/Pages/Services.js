import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../Common/SingleService';

const lorem = 'ורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.';
const services =[
    {title: 'אילוף ביתי', text: lorem, icon: "fa-dog"},
    {title: 'כלבנות טיפולית', text: lorem, icon: "fa-heartbeat"},
    {title: 'פנסיון', text: lorem, icon: "fa-bone"},
    {title: 'ליווי חתונות', text: lorem, icon: "fa-heart"},
    {title: 'קבוצות אילוף', text: lorem, icon: "fa-paw"},
    {title: "מידע מקצועי", text: lorem, icon: "fa-info"}
];

class Services extends Component{
    render(){
        return(
            <section className="page-section" id="main">
                <link href='http://serve.fontsproject.com/css?family=Ozrad+CLM:700' rel='stylesheet' type='text/css'></link>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase" id = "heading-override">שירותים</h2>
                        <br/>
                        <h3 className="section-subheading text-muted"></h3>

                    </div>
                    <div className="row text-center">
                        {services.map((service, index) => {
                            return <SingleService {...service} key={index}/>
                        })}

                    </div>
                </div>
            </section>
        )
    }
}

export default Services;