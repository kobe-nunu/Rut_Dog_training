import React, {Component} from 'react';

class Contact extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    }

    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">צרו קשר</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* <!-- Name input--> */}
                                    <input className="form-control" id="name" type="text" placeholder="* שם" data-sb-validations="required" value = {this.state.name} onChange = {e => this.setState({name: e.target.value})} />
                                    <div className="invalid-feedback" data-sb-feedback="name:required">יש לציין שם</div>
                                </div>
                                <div className="form-group">
                                    {/* <!-- Email address input--> */}
                                    <input className="form-control" id="email" type="email" placeholder="* כתובת מייל" data-sb-validations="required,email" value = {this.state.email} onChange = {e => this.setState({email: e.target.value})} />
                                    <div className="invalid-feedback" data-sb-feedback="email:required">יש להוסיף כתובת מייל</div>
                                    <div className="invalid-feedback" data-sb-
                                    feedback="email:email">כתובת המייל אינה תקינה</div>
                                </div>
                                <div className="form-group mb-md-0">
                                    {/* <!-- Phone number input--> */}
                                    <input className="form-control" id="phone" type="tel" placeholder="* מספר טלפון" data-sb-validations="required" value = {this.state.phone} onChange = {e => this.setState({phone: e.target.value})}/>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">יש להוסיף מספר טלפון</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    {/* <!-- Message input--> */}
                                    <textarea className="form-control" id="message" placeholder="* תוכן ההודעה" data-sb-validations="required" value = {this.state.message} onChange = {e => this.setState({message: e.target.value})}/>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">יש להוסיף תוכן להודעה</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Submit success message-->
                        <!---->
                        <!-- This is what your users will see when the form-->
                        <!-- has successfully submitted--> */}
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">הטופס נשלח בהצלחה!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        {/* <!-- Submit error message-->
                        <!---->
                        <!-- This is what your users will see when there is-->
                        <!-- an error submitting the form--> */}
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">שגיאה בשליחת הטופס!</div></div>
                        {/* <!-- Submit Button--> */}
                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">שליחה</button></div>
                    </form>
                </div>
            </section>
        )
    }
}
export default Contact;

