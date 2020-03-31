import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";

import { priceDataTable } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  helpBar: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between"
  }
};

const useStyles = makeStyles(styles);

export default function PricePolicyPage() {
  const roundButtons = [{ color: "info" }].map((prop, key) => {
    return (
      <>
        <NavLink to={"/admin/create-price-policy-page"}>
          <Button color="rose" size="sm">
            Update
          </Button>
        </NavLink>
        <Button size="sm">Delete</Button>
      </>
    );
  });
  const [data, setData] = React.useState(
    priceDataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        retailer: prop[0],
        priceDiscount: prop[1],
        product: prop[2],
        action: roundButtons
      };
    })
  );
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Price Policy Management</h4>
          </CardHeader>
          <CardHeader className={classes.helpBar}>
            <NavLink to={"/admin/create-price-policy-page"}>
              <Button color="rose" size="sm">
                Create New Policy
              </Button>
            </NavLink>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={data.map(item => ({ ...item, roundButtons }))}
              filterable
              columns={[
                {
                  Header: "Campaign",
                  accessor: "product"
                },
                {
                  Header: "Retailer",
                  accessor: "retailer"
                },
                {
                  Header: "Price",
                  accessor: "priceDiscount"
                },

                {
                  Header: "Action",
                  accessor: "action"
                }
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
