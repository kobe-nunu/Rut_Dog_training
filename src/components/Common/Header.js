import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header className="masthead" id="header-override">
                    <div className="masthead-heading text-uppercase" id="hoverride1">{this.props.title}</div>
                    <div className="masthead-subheading" id="hoverride2">{this.props.subtitle}</div>
                    {this.props.showButton ?
                        <Link className="btn btn-primary btn-xl text-uppercase" id="hoverride" to={this.props.link}>{this.props.ButtonText}</Link>
                    : null}
            </header>
        )
    }

}
export default Header;