import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Expanded from './Expanded';
const Tile= props =>(
    <div className="col mb-4">
      <div class="card" style={{width: "130px", height: "130px"}} >
   
        <img  class="card-img-top img-fluid" src={props.post.Images[0].ImageUrl} style={{width: "130px", height: "130px"}} alt="Card image">
        </img>
        <div class="card-img-overlay">
        <Link  to=    {{ 
          pathname: "/view",
          myCustomProps: props.post
        }} style={{color:"#f0f0f0"}}>
              {props.sn}
        </Link>
        </div>
       
        </div>
    </div>
)
class Tiles extends Component {
    constructor(props){
        super(props);
        this.state={ Posts : []};
    }
    componentDidMount(){
        const req_body = {
            "RequestObjects": [
                {
                    "Post": {
                        "OperationType": "Read",                
                        "Privacy": {
                            "SearchValues": ["Public"],
                            "Return": true
                        },      
                        "UserId": {
                            "SearchValues": ["assign"],
                            "Return": false
                        },               
                        "id": {
                            "Return": true
                        },
                        
                        "IsCalendarEntry": {
                            "SearchValues": [true],
                            "Return": true
                        },
                        "Images": { 
                            "Return": true
                        },								
                                         "Text": {
                            "Return": true 
                        },
                                        "Rating": {
                            "Return": true                    
                        },
                        "TypeOfDay":{
                             "Return": true
                        },    
                                        // Don't change anything above ^^		
        
                                        //editable variables start below //                               
                                                                
        
                                        "MaxItemCount": "21", // you can ask between 1 to 25 posts (max) at a time.                
                                                    
                        "CalendarDateTime": { // Date Time of a particular post
                            "Return": true, // please note: there can be multiple posts on a single day
                            "Sort": "Descending" // you can sort fetched dates by ascending/descending.
                        },                                
                        
                                        // Think of this as a pagination variable. In your response, you'll receive a continuationToken 
                                        // that you could send to fetch the subsequent posts.
                        "ContinuationToken": null                
                    }
                }
            ]    
        }
        
        axios.post('https://quinncareapidev.azurewebsites.net/api/graph',req_body)
        .then(response => {
           console.log(response.data.ResponseObjects[0])
           this.setState(
               {
                   Posts : response.data.ResponseObjects[0].Posts
               }
           )
            
        })
        .catch(function (error) {
            console.log(error);
            alert("error")

        })  
    }
    TileList(){
        return this.state.Posts.map(function(currentpost, i) {
          //console.log(currentEvent);
          return <Tile post={currentpost} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="container mb-3 mt-3">
                <div className="text-center"><h1>January 2021</h1></div>
                <div className="row">
                    <div className="col mb-4">
                        <div class="card" style={{width: "130px", height: "65px"}}>
                            <div class="card-img-overlay">
                                <b class="card-title">Mon</b>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div class="card" style={{width: "130px", height: "65px"}}>
                            <div class="card-img-overlay">
                                <b class="card-title">Tue</b>
                            </div>
                        </div>
                    </div>       
                    <div className="col mb-4">
                        <div class="card" style={{width: "130px", height: "65px"}}>
                            <div class="card-img-overlay">
                                <b class="card-title">Wed</b>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div class="card" style={{width: "130px", height: "65px"}}>
                            <div class="card-img-overlay">
                                <b class="card-title">Thu</b>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div class="card" style={{width: "130px", height: "65px"}}>
                            <div class="card-img-overlay">
                                <b class="card-title">Fri</b>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div class="card" style={{width: "130px", height: "65px"}}>
                            <div class="card-img-overlay">
                                <b class="card-title">Sat</b>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div class="card" style={{width: "130px", height: "65px"}}>
                            <div class="card-img-overlay">
                                <b class="card-title">Sun</b>
                            </div>
                        </div>
                    </div>                                                   
                </div>
                
                   <div className="row">
                     {this.TileList()}
                   </div>
            </div>
        );
    }
}

export default Tiles;