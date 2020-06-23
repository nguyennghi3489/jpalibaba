import React, { useEffect } from "react";
import { connect } from "react-redux";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { NavLink } from "react-router-dom";
import {
  deleteCampaign,
  showModal,
  ModalType,
  getCampaigns,
} from "provider/actions";
import {
  getAgencyIdSelector,
  getCampaignListSelector,
} from "provider/selectors";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

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
};

const useStyles = makeStyles(styles);

function CampaignManagement({
  deleteCampaign,
  showModal,
  getCampaigns,
  agencyId,
  campaigns,
}) {
  useEffect(() => {
    getCampaigns(agencyId);
  }, []);
  const showDeleteModal = (id) => {
    showModal(
      ModalType.Confirm,
      "Are you sure to delete this campaign ?",
      () => {
        deleteCampaign(id);
      }
    );
  };

  const roundButtons = (id) =>
    [{ color: "info" }].map((prop, key) => {
      return (
        <>
          <NavLink to={"/admin/view-campaign"}>
            <Button color="rose" size="sm">
              Detail
            </Button>
          </NavLink>
          <Button size="sm" onClick={() => showDeleteModal(id)}>
            Delete
          </Button>
        </>
      );
    });

  const resetButtons = [{ color: "info" }].map((prop, key) => {
    return <>Expired</>;
  });

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          {/* <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Campaign Management</h4>
          </CardHeader> */}
          <CardHeader className={classes.helpBar}>
            <NavLink to={"/admin/create-campaign-page"}>
              <Button color="rose" size="sm">
                Create New Campaign
              </Button>
            </NavLink>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={campaigns.map((item) => ({
                ...item.toCampaignManagmentItem(),
                action: roundButtons(item.id),
              }))}
              filterable
              columns={[
                {
                  Header: "Campaign Name",
                  accessor: "title",
                },
                {
                  Header: "Product",
                  accessor: "productName",
                },
                {
                  Header: "Minimun order to import",
                  accessor: "minAmountPerOrder",
                },
                {
                  Header: "Start Date",
                  accessor: "start",
                },
                {
                  Header: "Expired Date",
                  accessor: "expiry",
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
  campaigns: getCampaignListSelector(state),
  agencyId: getAgencyIdSelector(state),
});

export default connect(
  mapStateToProps,
  {
    deleteCampaign,
    showModal,
    getCampaigns,
  }
)(CampaignManagement);
