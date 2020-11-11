import React from "react";
import ReactTable from "react-table";

import { Grid, Button } from "@material-ui/core";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

const mockCategory = [
  {
    id: "1",
    name: "Food",
    status: "Deleted",
  },
  { id: "2", name: "Technology", status: "Available" },
  {
    id: "3",
    name: "Music",
    status: "Available",
  },
  { id: "4", name: "Sport", status: "Available" },
  { id: "5", name: "Fashion", status: "Available" },
  { id: "6", name: "Other", status: "Available" },
];

const mockOrigin = [
  {
    id: "1",
    name: "Vietnam",
    status: "Deleted",
  },
  { id: "2", name: "Japan", status: "Available" },
];

const actionButtons = (id) => {
  return [{ color: "info" }].map((prop, key) => {
    return (
      <div key={key}>
        <Button color="secondary" variant="contained" size="small">
          Update
        </Button>
        <Button variant="contained" size="small">
          Delete
        </Button>
      </div>
    );
  });
};

export const MiscManagement = () => {
  const transformedCategoryData =
    mockCategory.length > 0
      ? mockCategory.map((item) => {
          return {
            ...item,
            actions: actionButtons(item.id),
          };
        })
      : [];

  const transformedOriginData =
    mockOrigin.length > 0
      ? mockOrigin.map((item) => {
          return {
            ...item,
            actions: actionButtons(item.id),
          };
        })
      : [];

  return (
    <Grid container>
      <Grid xs={12} md={6} style={styles.leftCardWrapper}>
        <Card>
          <CardHeader>
            <Button color="secondary" variant="contained" size="small">
              New Category
            </Button>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={transformedCategoryData}
              filterable
              key="id"
              columns={[
                {
                  Header: "Id",
                  accessor: "id",
                },
                {
                  Header: "Category",
                  accessor: "name",
                },
                {
                  Header: "Status",
                  accessor: "status",
                },
                {
                  Header: "Actions",
                  accessor: "actions",
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
      </Grid>
      <Grid xs={12} md={6} style={styles.rightCardWrapper}>
        <Card>
          <CardHeader>
            <Button color="secondary" variant="contained" size="small">
              New Origin
            </Button>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={transformedOriginData.map((item) => item)}
              filterable
              key="id"
              columns={[
                {
                  Header: "Id",
                  accessor: "id",
                },
                {
                  Header: "Origin",
                  accessor: "name",
                },
                {
                  Header: "Status",
                  accessor: "status",
                },
                {
                  Header: "Actions",
                  accessor: "actions",
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
};

const styles = {
  leftCardWrapper: {
    paddingRight: "8px",
  },
  rightCardWrapper: {
    paddingLeft: "8px",
  },
};
