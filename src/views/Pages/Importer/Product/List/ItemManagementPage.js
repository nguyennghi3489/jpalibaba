import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { filterTableForCaseSensitive, forwardTo } from "helpers";
import {
  deleteProduct,
  getProducts,
  importProduct,
  ModalType,
  pickUpdateProduct,
  showModal,
} from "provider/actions";
import { getAgencyIdSelector, getProductList } from "provider/selectors";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { appUrl } from "routing";
import { ActionButtons } from "./components/ActionButtons";
import { ListLink } from "./components/ListLink";
import sampleFile from "assets/files/samplefile.csv";
import guidelineFile from "assets/files/import_guideline.pdf";
import { Typography } from "@material-ui/core";

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
    // eslint-disable-next-line
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

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader className={classes.helpBar}>
            <div>
              {/* <NavLink to={"/admin/export-item"}>
                <Button color="rose" size="sm">
                  Export CSV
                </Button>
              </NavLink> */}
              <Button
                color="rose"
                size="sm"
                onClick={() => setImportItemsOpen(true)}
              >
                Import CSV
              </Button>
            </div>

            <Button
              color="rose"
              size="sm"
              onClick={() => showCreateCampaignModal()}
            >
              Create New Item
            </Button>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={products.map((item) => ({
                ...item,
                campaignListCount: (
                  <ListLink
                    title="Campaigns"
                    url={`/admin${appUrl.campaignManagementPage}/${item.id}`}
                    count={item.campaignListCount}
                  />
                ),
                orders: (
                  <NavLink to={`/admin/order-management`}>Orders</NavLink>
                ),
                action: (
                  <ActionButtons
                    id={item.id}
                    hasImage={item.image}
                    showDeleteModal={showDeleteModal}
                  />
                ),
              }))}
              filterable
              defaultFilterMethod={filterTableForCaseSensitive}
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
                  width: 100,
                },
                {
                  Header: "Price",
                  accessor: "unitPrice",
                  Cell: (props) => <>{props.value.toFixed(2)} </>,
                  width: 100,
                },
                {
                  Header: "Origin",
                  accessor: "origin",
                  width: 100,
                },
                {
                  Header: "Campaigns",
                  accessor: "campaignListCount",
                  width: 130,
                },
                {
                  Header: "Orders",
                  accessor: "orders",
                  width: 100,
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
            <Typography>
              You need to import the file same format as(
              <a href={sampleFile} download>
                Sample File
              </a>
              )
            </Typography>
            <Typography>
              Detail instruction is described in this
              <a href={guidelineFile} download>
                {` Guideline File Here`}
              </a>
            </Typography>
          </DialogContentText>
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              hidden
              accept=".csv"
              onChange={(event) => setImportFile(event.target.files[0])}
            />
          </Button>
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
