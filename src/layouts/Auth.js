// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";
import Footer from "components/Footer/Footer.js";
// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes.js";
import { NotfoundPage } from "views/Pages/Notfound/NotFound";

const useStyles = makeStyles(styles);

export default function Pages(props) {
  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route exact path={prop.path} component={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (window.location.href.indexOf(routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  return (
    <div>
      <AuthNavbar brandText={getActiveRoute(routes)} {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div className={classes.fullPage}>
          <Switch>
            {getRoutes(routes)}
            <Route path="*" component={NotfoundPage} />;
          </Switch>
          {/* <Footer white /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
