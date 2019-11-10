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
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
// import ReactSearchBox from 'react-search-box';

class AdminNavbarLinks extends Component {
  constructor(props){
    super(props);
    console.log(props)
    
  }
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    const logged_out_nav = (
      <div>
        <ur>
        <NavItem onClick={()=>this.props.display_form('login')}>login</NavItem>
        <NavItem onClick={()=>this.props.display_form('signup')}>signup</NavItem>
        </ur>
      </div>
    );
    const logged_in_nav = (
      <div>
        <NavItem onClick={this.props.handle_logout}>logout</NavItem>
      </div>
    );
    
  
    return (
      <div>
        <Nav>
          <NavItem>
        

          </NavItem>
          
          <NavItem eventKey={3} href="#">
            
          </NavItem>
        </Nav>
        <Nav pullRight>
        <div>{this.props.logged_in ? logged_in_nav : logged_out_nav}</div>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
