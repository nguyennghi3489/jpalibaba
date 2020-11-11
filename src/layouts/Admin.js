import React from "react";
import cx from "classnames";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { roleSelector, tokenSelector } from "provider/selectors";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import RouteWithAuth from "components/RouteWithAuth";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/adminStyle.js";

var ps;

const useStyles = makeStyles(styles);

function Dashboard(props) {
  const { ...rest } = props;
  const { role, token } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const image = require("assets/img/sidebar-2.jpg");
  const color = "blue";
  const bgColor = "black";
  // const [hasImage, setHasImage] = React.useState(true);
  const logo = require("assets/img/logo-white.svg");
  // styles
  const classes = useStyles();
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });
  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getActiveRoute = (routes) => {
    let activeRoute;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        const path = routes[i].path.replace(":id", "");
        if (window.location.href.indexOf(routes[i].layout + path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = (routes, role) => {
    return routes
      .filter((item) => item.role === role || item.role === "all")
      .map((prop, key) => (
        <RouteWithAuth
          path={prop.layout + prop.path}
          component={prop.component}
        />
      ));
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const getRoleRoutes = (role) =>
    routes.filter(
      (item) => (item.role === role || item.role === "all") && item.show
    );

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={getRoleRoutes(role)}
        logoText={"Collecport"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        bgColor={bgColor}
        miniActive={miniActive}
        {...rest}
      />
      <div className={mainPanelClasses} ref={mainPanel}>
        <AdminNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={getActiveRoute(routes)}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.map}>
          <Switch>
            {token && getRoutes(routes, role)}
            <Redirect from="/admin" to="/login-page" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  role: roleSelector(state),
  token: tokenSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
