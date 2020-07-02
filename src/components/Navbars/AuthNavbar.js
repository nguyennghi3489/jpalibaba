import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  roleSelector,
  tokenSelector,
  firstNameSelector,
} from "provider/selectors";
import { connect } from "react-redux";
import { logout } from "provider/actions/authentication";
import { appUrl } from "routing";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Search from "@material-ui/icons/Search";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// core components
import Button from "components/CustomButtons/Button";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-dashboard-pro-react/components/authNavbarStyle.js";

const useStyles = makeStyles(styles);

function SimpleMenu({ firstName, logout, role }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {firstName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          {role !== 1 ? (
            <NavLink to={`/admin${appUrl.userPage}`}>Profile</NavLink>
          ) : (
            <NavLink to={`/admin${appUrl.userManagementPage}`}>Admin</NavLink>
          )}
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const classes = useStyles();
  const { color, brandText, firstName, token, logout, role } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color,
  });

  const renderUserSection = (
    <>
      {!token ? (
        <ListItem className={classes.listItem}>
          <NavLink
            to={appUrl.loginPage}
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute(appUrl.loginPage),
            })}
          >
            <Fingerprint className={classes.listItemIcon} />
            <ListItemText
              primary={"Login"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
      ) : (
        <ListItem className={classes.listItem}>
          <SimpleMenu role={role} firstName={firstName} logout={logout} />
        </ListItem>
      )}
    </>
  );

  var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/admin/checkout-page"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/admin/checkout-page"),
          })}
        >
          {/* <Fingerprint className={classes.listItemIcon} /> */}
          <ShoppingCartIcon
            // primary={"ShoppingCartIcon"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      {renderUserSection}
    </List>
  );
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <NavLink to={appUrl.homePage}>
            <Button href="#" className={classes.title} color="transparent">
              <h4>
                <b>Collecport</b>
              </h4>
            </Button>
          </NavLink>
        </div>
        <CustomInput
          formControlProps={{
            className: classes.top + " " + classes.search,
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput,
            },
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <NavLink to={appUrl.searchPage} style={{ display: "inline-grid" }}>
            <Search
              className={classes.headerLinksSvg + " " + classes.searchIcon}
            />
          </NavLink>
        </Button>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};

const mapStateToProps = (state) => ({
  firstName: firstNameSelector(state),
  token: tokenSelector(state),
  role: roleSelector(state),
});

export default connect(
  mapStateToProps,
  { logout }
)(AuthNavbar);
