import { Modal } from "@material-ui/core";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  deleteCampaign,
  getAdminCampaign,
  ModalType,
  showModal,
} from "provider/actions";
import {
  getAdminCampaignListSelector,
  getAgencyIdSelector,
} from "provider/selectors";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { appUrl } from "routing";

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
  getAdminCampaign,
  deleteCampaign,
  showModal,
  agencyId,
  campaigns,
  ...props
}) {
  console.log("RUN");
  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    getAdminCampaign(agencyId, id);
    // eslint-disable-next-line
  }, [props.match]);
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
          <NavLink to={`/admin${appUrl.campaignDetailPage}/${id}`}>
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

  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader className={classes.helpBar}>
              {/* <NavLink to={`/admin${appUrl.createCampaignFlowPage}`}>
                <Button
                  color="rose"
                  size="sm"
                  onClick={() => showCreateCampaignModal()}
                >
                  Create New Campaign
                </Button>
              </NavLink> */}
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
                    Header: "Product",
                    accessor: "title",
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
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <Modal
        open={false}
        onClose={() => {}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>Hello</div>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  campaigns: getAdminCampaignListSelector(state),
  agencyId: getAgencyIdSelector(state),
});

export default connect(
  mapStateToProps,
  {
    deleteCampaign,
    showModal,
    getAdminCampaign,
  }
)(CampaignManagement);
