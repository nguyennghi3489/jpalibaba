import React, { useEffect } from "react";
import { connect } from "react-redux";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { NavLink } from "react-router-dom";
import { appUrl } from "routing";

import {
  showModal,
  ModalType,
  deleteProduct,
  importProduct,
  getProducts,
  pickUpdateProduct,
} from "provider/actions";
import { getAgencyIdSelector, getProductList } from "provider/selectors";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CustomInput from "components/CustomInput/CustomInput.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import { forwardTo } from "helpers";

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

function ItemManagementPage({
  deleteProduct,
  showModal,
  importProduct,
  getProducts,
  agencyId,
  products,
  pickUpdateProduct,
}) {
  useEffect(() => {
    getProducts({ agencyId, limit: 20, offset: 0 });
  }, []);

  const showDeleteModal = (id) => {
    showModal(ModalType.Confirm, "Are you sure to delete this item ?", () => {
      deleteProduct(id);
    });
  };

  const updateProduct = (id) => {
    const updatingItem = products.filter((item) => item.id === id)[0];
    pickUpdateProduct(updatingItem);
  };

  const [batchDeleteOpen, setBatchDeleteOpen] = React.useState(false);
  const [importItemsOpen, setImportItemsOpen] = React.useState(false);
  const [importFile, setImportFile] = React.useState(null);

  const importProductFile = () => {
    importProduct(importFile);
    setImportItemsOpen(false);
  };

  const showCreateCampaignModal = () => {
    showModal(
      ModalType.CreateCampaign,
      "Do you want to create item with campaign ?",
      () => {
        forwardTo(`/admin${appUrl.createCampaignFlowPage}`);
      }
    );
  };

  const actionButtons = (id) => {
    return [{ color: "info" }].map((prop, key) => {
      return (
        <>
          <NavLink to={`/admin${appUrl.createCampaignPage}/${id}`}>
            <Button color="info" size="sm">
              Create New Campaign
            </Button>
          </NavLink>
          <Button color="rose" size="sm" onClick={() => updateProduct(id)}>
            Update
          </Button>
          <Button size="sm" onClick={() => showDeleteModal(id)}>
            Delete
          </Button>
        </>
      );
    });
  };

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader className={classes.helpBar}>
            <div>
              <NavLink to={"/admin/export-item"}>
                <Button color="rose" size="sm">
                  Export CSV
                </Button>
              </NavLink>
              <Button
                color="rose"
                size="sm"
                onClick={() => setImportItemsOpen(true)}
              >
                Import CSV
              </Button>
            </div>

            {/* <NavLink to={`/admin${appUrl.createProductPage}`}> */}
            <Button
              color="rose"
              size="sm"
              onClick={() => showCreateCampaignModal()}
            >
              Create New Item
            </Button>
            {/* </NavLink> */}
          </CardHeader>
          <CardBody>
            <ReactTable
              data={products.map((item) => ({
                ...item,
                activatedCampaignsNumber: 0,
                action: actionButtons(item.id),
              }))}
              filterable
              columns={[
                {
                  Header: "Name",
                  accessor: "title",
                },
                {
                  Header: "Category",
                  accessor: "category",
                  width: 100,
                },
                {
                  Header: "Maker",
                  accessor: "brand",
                  width: 150,
                },
                {
                  Header: "Price",
                  accessor: "unitPrice",
                  width: 150,
                },
                {
                  Header: "Origin",
                  accessor: "origin",
                  width: 100,
                },
                {
                  Header: "Campaigns",
                  accessor: "activatedCampaignsNumber",
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
      <Dialog
        open={batchDeleteOpen}
        onClose={() => {
          setBatchDeleteOpen(false);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Batch Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type the tag you want to perform the batch delete
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tag Name"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBatchDeleteOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setBatchDeleteOpen(false)} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={importItemsOpen}
        onClose={() => {
          setImportItemsOpen(false);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Import Item File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You need to import the file flow the template format
          </DialogContentText>
          <CustomInput
            labelText={""}
            id="registrationFile"
            formControlProps={{
              fullWidth: false,
            }}
            inputProps={{
              type: "file",
              onChange: (event) => {
                setImportFile(event.target.files[0]);
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImportItemsOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={importProductFile} color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
  products: getProductList(state),
});

export default connect(
  mapStateToProps,
  { deleteProduct, showModal, importProduct, getProducts, pickUpdateProduct }
)(ItemManagementPage);
