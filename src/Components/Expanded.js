import React, { Component } from 'react';
import img from '../img_avatar1.png';
import { Link } from 'react-router-dom';
import Moment from 'moment';
class Expanded extends Component {
  
    render() {
        return (
            <div className="container mb-3">
                <Link to="/" class="btn mb-3"><i class="fa fa-close"></i></Link>
                <div className="row">
                    <div className="col">
                        <div class="card" style={{width:"300px",height:"660px"}}>
                        <h4 class="card-text">{Moment(this.props.location.myCustomProps.CalendarDateTime).format('YYYY-MM-DD')}</h4>
                            <h6 class="card-text">Rating - {this.props.location.myCustomProps.Rating}/5</h6>
                            <img class="card-img-top img-fluid" src={this.props.location.myCustomProps.Images[0].ImageUrl} alt="Card image" style={{width:"300px",height:"400px"}}/>
                            <div class="card-body">
                            {/* <h4 class="card-title">John Doe</h4> */}

                            <p class="card-text">{this.props.location.myCustomProps.Text}</p>
                            
                            </div>
                        </div>
                    </div>   
                    <div className="col">
                        <div class="card" style={{width:"300px",height:"660px"}}>
                        <h4 class="card-text">{Moment(this.props.location.myCustomProps.CalendarDateTime).format('YYYY-MM-DD')}</h4>
                            <h6 class="card-text">Rating - {this.props.location.myCustomProps.Rating}/5</h6>
                            <img class="card-img-top img-fluid" src={this.props.location.myCustomProps.Images[0].ImageUrl} alt="Card image" style={{width:"300px",height:"400px"}}/>
                            <div class="card-body">
                            {/* <h4 class="card-title">John Doe</h4> */}

                            <p class="card-text">{this.props.location.myCustomProps.Text}</p>
                            
                            </div>
                        </div>
                    </div>   
                    <div className="col">
                        <div class="card" style={{width:"300px",height:"660px"}}>
                        <h4 class="card-text">{Moment(this.props.location.myCustomProps.CalendarDateTime).format('YYYY-MM-DD')}</h4>
                            <h6 class="card-text">Rating - {this.props.location.myCustomProps.Rating}/5</h6>
                            <img class="card-img-top img-fluid" src={this.props.location.myCustomProps.Images[0].ImageUrl} alt="Card image" style={{width:"300px",height:"400px"}}/>
                            <div class="card-body">
                            {/* <h4 class="card-title">John Doe</h4> */}

                            <p class="card-text">{this.props.location.myCustomProps.Text}</p>
                            
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}

export default Expanded;