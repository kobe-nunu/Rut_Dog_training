import React, {Component} from 'react';
import VideoModal from './VideoModal';
import {Link} from 'react-router-dom';

class SingleGuide extends Component{
    render(){
        return(
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <Link className="portfolio-link" data-bs-toggle="modal" to={this.props.href}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.image} alt="..." />
                    </Link>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.title}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                    </div>
                </div>

                <VideoModal id = {(this.props.href).substring(1)} title = {this.props.title} description = {this.props.subtitle} vidsrc = {this.props.vidsrc} />
            </div>         
        )
    }
}
export default SingleGuide;