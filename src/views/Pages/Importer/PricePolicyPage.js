// @material-ui/core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import { NavLink } from "react-router-dom";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { priceDataTable } from "variables/general.js";

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
  const data = priceDataTable.dataRows.map((prop, key) => {
    return {
      id: key,
      retailer: prop[0],
      priceDiscount: prop[1],
      product: prop[2],
      action: roundButtons,
    };
  });

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardBody>
            <ReactTable
              data={data.map((item) => ({ ...item, roundButtons }))}
              filterable
              columns={[
                {
                  Header: "Campaign",
                  accessor: "product",
                },
                {
                  Header: "Retailer",
                  accessor: "retailer",
                },
                {
                  Header: "Price",
                  accessor: "priceDiscount",
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
