import React, { useEffect } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { showModal, ModalType, deleteUser, getUsers } from "provider/actions";
import { usersSelector } from "provider/selectors";
import { appUrl } from "routing";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import {
  formatUserRole,
  filterTableForCaseSensitive,
  formatStandardDate,
} from "helpers";
import { ActionButtons } from "./components/ActionButtons";

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

function UserManagementPage({ showModal, deleteUser, getUsers, users }) {
  const showDeleteModal = (id) => {
    showModal(
      ModalType.Confirm,
      "Are you sure to delete this account ?",
      () => {
        deleteUser(id);
      }
    );
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();
  const apiData =
    users.length > 0
      ? users.map((item) => {
          return {
            id: item.id,
            agencyName: item.agencyName,
            username: item.firstName,
            type: formatUserRole(item.role),
            email: item.email,
            registrationDate: formatStandardDate(item.created),
            action: <ActionButtons id={item.id} />,
            isActive: item.isActive ? "Active" : "Inactive",
            isMailVerified: item.isMailVerified ? "Verified" : "No Verified",
          };
        })
      : [];

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader className={classes.helpBar}>
            <NavLink
              to={`/admin${appUrl.createUserPage}`}
              className={classes.buttonLink}
            >
              <Button color="rose" size="sm">
                Create New User
              </Button>
            </NavLink>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={apiData.map((item) => ({ ...item }))}
              filterable
              key="id"
              defaultFilterMethod={filterTableForCaseSensitive}
              columns={[
                {
                  Header: "Agency Name",
                  accessor: "agencyName",
                },
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
                  Header: "Active",
                  accessor: "isActive",
                },
                {
                  Header: "Mail Verified",
                  accessor: "isMailVerified",
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

const mapStateToProps = (state) => ({
  users: usersSelector(state),
});
export default connect(
  mapStateToProps,
  { showModal, deleteUser, getUsers }
)(UserManagementPage);
