import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import { GalleryModal } from "../Gallery/Modal";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  inputAdornment: {
    position: "relative",
  },
};

class CampaignStep extends React.Component {
  state = {
    modalStatus: "",
  };
  sendState() {
    return {};
  }

  isValidated = async () => {
    return true;
  };

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Product Image</h4>
        </GridItem>
        <GridItem xs={12} sm={12} style={styles.section}>
          <Button
            onClick={() => {
              this.setState({ modalStatus: true });
            }}
          >
            Add Photo
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Product Gallery</h4>
        </GridItem>
        <GridItem xs={12} sm={12} style={styles.section}>
          <Button
            onClick={() => {
              this.setState({ modalStatus: true });
            }}
          >
            Add Photo
          </Button>
        </GridItem>
        <GalleryModal
          onClose={() => this.setState({ modalStatus: false })}
          open={this.state.modalStatus}
          onSubmit={(items) => console.log(items)}
        />
      </GridContainer>
    );
  }
}

export default withStyles(style)(CampaignStep);

const styles = {
  section: {
    textAlign: "center",
    marginBottom: 64,
  },
};
