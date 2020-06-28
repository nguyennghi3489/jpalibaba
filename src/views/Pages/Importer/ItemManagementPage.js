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

import { itemDataTable } from "variables/general.js";

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
    const updatingItem = products.filter((item) => item.id == id)[0];
    pickUpdateProduct(updatingItem);
  };

  const [batchDeleteOpen, setBatchDeleteOpen] = React.useState(false);
  const [importItemsOpen, setImportItemsOpen] = React.useState(false);
  const [importFile, setImportFile] = React.useState(null);

  const importProductFile = () => {
    importProduct(importFile);
    setImportItemsOpen(false);
  };

  const actionButtons = (id) => {
    return [{ color: "info" }].map((prop, key) => {
      return (
        <>
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

  const resetButtons = [{ color: "info" }].map((prop, key) => {
    return <>Expired</>;
  });
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

            <NavLink to={`/admin${appUrl.createProductPage}`}>
              <Button color="rose" size="sm">
                Create New Item
              </Button>
            </NavLink>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={products.map((item) => ({
                ...item,
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
                },
                {
                  Header: "Brand",
                  accessor: "brand",
                },
                {
                  Header: "Price",
                  accessor: "unitPrice",
                },
                {
                  Header: "Origin",
                  accessor: "origin",
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
