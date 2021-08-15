import React, {Component} from 'react';

class VideoModal extends Component{

    render(){
        return(
            <div className="portfolio-modal modal fade" id={this.props.id} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={"assets/img/close-icon.svg"} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">{this.props.title}</h2>
                                        <p className="item-intro text-muted"></p>
                                        <video className="img-fluid d-block mx-auto" controls alt="...">
                                            <source src={this.props.vidsrc} type ="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                        <p>{this.props.description}</p>
                                        {/* <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                Threads
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                Illustration
                                            </li>
                                        </ul> */}
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-times me-1"></i>
                                            סגור
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoModal;