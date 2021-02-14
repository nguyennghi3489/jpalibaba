import { Link, Modal } from "@material-ui/core";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger";
import { filterTableForCaseSensitive } from "helpers";
import moment from "moment";
import {
  deleteCampaign,
  getAdminCampaign,
  showModal,
  updateCampaignStatus,
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

const isAfterToday = (expired) => {
  const expiredDate = expired.format("L");
  const today = moment().format("L");
  console.log(today);
  return moment(expiredDate).isAfter(moment(today), "day");
};

function CampaignManagement({
  getAdminCampaign,
  deleteCampaign,
  updateCampaignStatus,
  showModal,
  agencyId,
  campaigns,
  ...props
}) {
  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    getAdminCampaign(agencyId, id);
    // eslint-disable-next-line
  }, [props.match]);

  const renderExpiryField = (expiry) => {
    return (
      <>
        {isAfterToday(expiry) ? (
          expiry.format("L").toString()
        ) : (
          <Danger>{expiry.format("L").toString()}</Danger>
        )}
      </>
    );
  };

  const renderProgressBar = (item) => {
    return (
      <>
        <CustomLinearProgress
          variant="determinate"
          color="primary"
          value={item.goalPercent}
        />
        {`${item.goalPercent}% (${item.currentAmountOfOrders}/${item.goal} orders)`}
      </>
    );
  };

  const renderOrdersField = () => {
    return <Link href={`/admin/order-management`}>View Orders</Link>;
  };

  const roundButtons = (id, status, expiry) =>
    [{ color: "info" }].map((prop, key) => {
      return (
        <>
          <NavLink to={`/admin${appUrl.campaignDetailPage}/${id}`}>
            <Button color="rose" size="sm">
              Detail
            </Button>
          </NavLink>
          {expiry && isAfterToday(expiry) && (
            <>
              {status ? (
                <Button
                  size="sm"
                  onClick={() => updateCampaignStatus(id, false)}
                >
                  Deactivate
                </Button>
              ) : (
                <Button
                  size="sm"
                  color="primary"
                  onClick={() => updateCampaignStatus(id, true)}
                >
                  Activate
                </Button>
              )}
            </>
          )}
        </>
      );
    });

  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader className={classes.helpBar}></CardHeader>
            <CardBody>
              <ReactTable
                data={campaigns.map((item) => ({
                  ...item.toCampaignManagmentItem(),
                  goal: renderProgressBar(item.toCampaignManagmentItem()),
                  expiry: renderExpiryField(item.expiry),
                  orders: renderOrdersField(),
                  action: roundButtons(item.id, item.activated, item.expiry),
                }))}
                filterable
                defaultFilterMethod={filterTableForCaseSensitive}
                columns={[
                  {
                    Header: "Product",
                    accessor: "title",
                  },
                  {
                    Header: "Minimum/order ",
                    accessor: "minAmountPerOrder",
                    width: 200,
                  },
                  {
                    Header: "Goal",
                    accessor: "goal",
                  },
                  {
                    Header: "Start Date",
                    accessor: "start",
                    width: 150,
                  },
                  {
                    Header: "Expired Date",
                    accessor: "expiry",
                    width: 150,
                  },

                  {
                    Header: "Orders",
                    accessor: "orders",
                    width: 150,
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
    updateCampaignStatus,
  }
)(CampaignManagement);
