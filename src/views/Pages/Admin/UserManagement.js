import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { showModal, ModalType, deleteUser, updateSettingm } from "actions";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";

import { userDataTable } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  helpBar: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  buttonLink: {
    color: "white",
  },
};

const useStyles = makeStyles(styles);

function UserManagementPage({ showModal, deleteUser }) {
  const showDeleteModal = (id) => {
    showModal(
      ModalType.Confirm,
      "Are you sure to delete this account ?",
      () => {
        deleteUser(id);
      }
    );
  };

  const actionButtons = (id) => {
    return [{ color: "info" }].map((prop, key) => {
      return (
        <>
          <Button color="rose" size="sm">
            <NavLink
              to={"/admin/update-user-info/" + id}
              style={styles.buttonLink}
            >
              Update
            </NavLink>
          </Button>
          <Button size="sm" onClick={() => showDeleteModal(id)}>
            Delete
          </Button>
        </>
      );
    });
  };

  const [data, setData] = React.useState(
    userDataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        username: prop[0],
        type: prop[1],
        email: prop[2],
        registrationDate: prop[3],
        action: actionButtons(key),
      };
    })
  );
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader className={classes.helpBar}>
            <NavLink
              to={"/admin/create-user-page"}
              className={classes.buttonLink}
            >
              <Button color="rose" size="sm">
                Create New User
              </Button>
            </NavLink>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={data.map((item) => ({ ...item }))}
              filterable
              columns={[
                {
                  Header: "UserName",
                  accessor: "username",
                },
                {
                  Header: "Type",
                  accessor: "type",
                },
                {
                  Header: "Email",
                  accessor: "email",
                },
                {
                  Header: "Registration Date",
                  accessor: "registrationDate",
                },
                {
                  Header: "Action",
                  accessor: "action",
                },
              ]}
              defaultPageSize={10}
              //   showPaginationTop
              //   showPaginationBottom={false}
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default connect(
  null,
  { showModal, deleteUser }
)(UserManagementPage);
