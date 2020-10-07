import React from "react";
import { clientSignup } from "provider/actions/signup";
import { connect } from "react-redux";

import { parseNewUserInfo } from "helpers";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import ProductStep from "./ProductStep";
import CampaignStep from "./CampaignStep";
import PricePolicyStep from "./PricePolicyStep";

class CreateCampaignFlow extends React.Component {
  render() {
    const { clientSignup } = this.props;
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
                stepName: "Create Campaign",
                stepComponent: CampaignStep,
                stepId: "campaign",
              },
              {
                stepName: "Add Price Policy",
                stepComponent: PricePolicyStep,
                stepId: "pricePolicy",
              },
            ]}
            title="Create a campaign with new product"
            subtitle=""
            finishButtonClick={(values) => {
              console.log(values);
              // clientSignup(parseNewUserInfo(values));
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
