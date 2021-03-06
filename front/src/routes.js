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
import Dashboard from "views/Dashboard.jsx";
import Jobreport from "views/Jobreport.jsx"
import FileUpload from "components/blob/FileUpload"
const dashboardRoutes = [
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/jobreport",
    name: "Jobreport",
    icon: "pe-7s-graph",
    component: Jobreport,
    layout: "/admin"
  },
  {
    path: "/FileUpload",
    name: "Fileupload",
    icon: "pe-7s-note2",
    component: FileUpload,
    layout: "/admin"
  },



];

export default dashboardRoutes;
