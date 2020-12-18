import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Wizard from "components/Wizard/Wizard.js";
import { parseNewProductWorkflowData } from "helpers";
import { addProduct, addProductFlow } from "provider/actions";
import { clientSignup } from "provider/actions/signup";
import { getAgencyIdSelector, getUserIdSelector } from "provider/selectors";
import React from "react";
import { connect } from "react-redux";
import CampaignStep from "./CampaignStep";
import ImageStep from "./ImageStep";
import ProductStep from "./ProductStep";

class CreateCampaignFlow extends React.Component {
  render() {
    const { agencyId, userId, addProduct, addProductFlow } = this.props;
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
              const data = parseNewProductWorkflowData(
                agencyId,
                userId,
                values
              );
              addProductFlow(data);
              // console.log(values);
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
  userId: getUserIdSelector(state),
});
export default connect(
  mapStateToProps,
  { clientSignup, addProduct, addProductFlow }
)(CreateCampaignFlow);
