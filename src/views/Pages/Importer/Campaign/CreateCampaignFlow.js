import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Wizard from "components/Wizard/Wizard.js";
import { clientSignup } from "provider/actions/signup";
import React from "react";
import { connect } from "react-redux";
import CampaignStep from "./CampaignStep";
import ImageStep from "./ImageStep";
import ProductStep from "./ProductStep";

class CreateCampaignFlow extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              {
                stepName: "Create Product Item",
                stepComponent: ProductStep,
                stepId: "product",
              },
              {
                stepName: "Add Product Photo",
                stepComponent: ImageStep,
                stepId: "image",
              },
              {
                stepName: "Create Campaign",
                stepComponent: CampaignStep,
                stepId: "campaign",
              },
            ]}
            title="Create a campaign with new product"
            subtitle=""
            finishButtonClick={(values) => {
              // console.log(values);
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default connect(
  null,
  { clientSignup }
)(CreateCampaignFlow);
