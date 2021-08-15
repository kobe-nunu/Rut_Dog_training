import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <div>
                {/* <!-- Navigation--> */}
                <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img id="logo-override" src="assets/img/logo.png" alt="..." /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ms-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/guides">מדריכי וידאו</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/tips">טיפים</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">קצת עליי</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default PageWrapper;