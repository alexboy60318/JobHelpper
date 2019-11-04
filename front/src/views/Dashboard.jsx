/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { cloneWithoutLoc } from "@babel/types";
import { exists } from "fs";


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather_text:[],
      weather_text2:[],
      weather_degree:[],
      weatherfeel:[],
      humidity:[],
      items:{},
      locationName:[],
      renew:[],
      MaxTem:{},
      MinTem:{},
      

      
      
    }
  }

  // componentWillMount(){
  //   fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E8B340E7-390D-405B-8FD6-16256AD37830')
  //     .then(res=>res.json())
  //     .then(json =>{
  //       this.setState({
  //         items: json,
  //       })
  //     })
  // }
  componentDidMount(){
    // console.log("in cpd")
    fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E8B340E7-390D-405B-8FD6-16256AD37830',{method:'get'})
      .then(res=>res.json())
      .then(json =>{
        this.setState({
          items: json,
        })
      })
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    let items = this.state.items;
   let weather_text = this.state.weather_text;
   let weather_degree = this.state.weather_degree;
    let humidity = this.state.humidity;
    let renewtime = this.state.renew;
    let weatherfeel =this.state.weatherfeel;
    let locations = this.state.locationName;
    
    console.log(items)
    for(var key1 in items.records){
      //records
      if(key1 ==="location"){
        var datapr1 = items.records[key1]
        
        for(var key2 in datapr1){
          //location array
            var datapr2 = datapr1[key2]
            for(var key3 in datapr2){
              if(key3 ==="locationName"){
                //locationName
                locations = datapr2[key3]
                
                //console.log(locations)
              }else{
                //weatherElement
                var datapr3 = datapr2[key3]
                for(var key4 in datapr3){
                  //weatherElement Arrays
                  var datapr4 = datapr3[key4]
                  if(key4 == 0){
                    for(var key5 in datapr4){
                      if(key5 === "time"){
                        var datapr5 = datapr4[key5]
                        for(var key6 in datapr5){
                          if(key6 == 2){
                            var datapr6 = datapr5[key6]
                            for(var key7 in datapr6){
                              if(key7 ==="endTime"){
                                renewtime = datapr6[key7]
                              }else if(key7 ==="parameter"){
                                var datapr7 = datapr6[key7]
                                for(var key8 in datapr7){
                                  if(key8 ==="parameterName"){
                                    weather_text = datapr7[key8]
                                    // console.log(weather)
                                    }
                                  }
                                }
                                
                              }
                            }
                          }
                        }
                    }
                  // }
                     
                  }else if(key4 == 1){

                    for(var key5 in datapr4){
                      if(key5 === "time"){
                        var datapr5 = datapr4[key5]
                        for(var key6 in datapr5){
                          if(key6 == 2){
                            var datapr6 = datapr5[key6]
                            for(var key7 in datapr6){
                              if(key7 ==="endTime"){
                                renewtime = datapr6[key7]
                              }else if(key7 ==="parameter"){
                                var datapr7 = datapr6[key7]
                                for(var key8 in datapr7){
                                  if(key8 ==="parameterName"){
                                    humidity = datapr7[key8]
                                    // console.log(weather)
                                   }
                                  }
                                }
                                
                              }
                            }
                          }
                        }
                    }

                  }else if(key4 == 4){

                    for(var key5 in datapr4){
                      if(key5 === "time"){
                        var datapr5 = datapr4[key5]
                        for(var key6 in datapr5){
                          if(key6 == 2){
                            var datapr6 = datapr5[key6]
                            for(var key7 in datapr6){
                              if(key7 ==="endTime"){
                                renewtime = datapr6[key7]
                              }else if(key7 ==="parameter"){
                                var datapr7 = datapr6[key7]
                                for(var key8 in datapr7){
                                  if(key8 ==="parameterName"){
                                    weather_degree = datapr7[key8]
                                    // console.log(weather)
                                   }
                                  }
                                }
                                
                              }
                            }
                          }
                        }
                    }
                    
                    
 
                  }else if(key4 == 3){
                    for(var key5 in datapr4){
                    
                      if(key5 === "time"){
                        var datapr5 = datapr4[key5]
                        for(var key6 in datapr5){
                          if(key6 == 2){
                            var datapr6 = datapr5[key6]
                            for(var key7 in datapr6){
                              if(key7 ==="parameter"){
                                var datapr7 = datapr6[key7]
                                for(var key8 in datapr7){
                                  if(key8 ==="parameterName"){
                                    
                                    weatherfeel = datapr7[key8]
                                    // console.log(weather)
                                    
                                    }
                                  }
                                }
                                
                              }
                            }
                          }
                        }
                    }

                  }else{


                    
                  }
                }
              }
            }
        }
      }
      
      // in records
      // for(var key in datapr1){
      //     var datapr2 = datapr1[key]
      //   for(var key2 in datapr2){
          
      //     var datapr3 = datapr2[key2]
        
      //     console.log(datapr3)
      //   }
      // }
    }
    console.log(weather_degree)
    console.log(weather_text)
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            
            <Col lg={6} sm={6}>
            {/* {items.map((item)=>( */}
              <StatsCard
                bigIcon={<i className="pe-7s-sun text-warning" />}
                place={locations}
                statsText="Temperture"
                statsValue={weather_degree+"C"}
                statsValue2 ={weather_text}
                 
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText={renewtime}
              />
            {/* ))} */}
            </Col>
            
            <Col lg={6} sm={6}>
            
                 
              
              <StatsCard
                //key = //{item.records.loaction[0].weatherElement[4]}
                bigIcon={<i className="pe-7s-umbrella text-success" />}
                place={locations}
                statsText="humidity"
                statsValue={humidity+"%"}
                statsValue2 ={weatherfeel}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText={renewtime}
              />
            
            </Col>
            
          </Row>
          <Row>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="BackGround Music"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  
                  <div>
<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1Epr7cEck9eESt/" width="320" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"  ></iframe>
                  </div>
                }

              />
            </Col>
            <Col md={8}>
              <Card
                title="Todo List"
                category="Job Schedulaing"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>

          <Row>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
