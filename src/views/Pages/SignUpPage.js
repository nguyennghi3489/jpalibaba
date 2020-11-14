import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Wizard from "components/Wizard/Wizard.js";
import { parseNewUserInfo } from "helpers";
import { clientSignup } from "provider/actions/signup";
import React from "react";
import { connect } from "react-redux";
import AgencyInformation from "../Forms/WizardSteps/AgencyInformation";
import TypePickingStep from "../Forms/WizardSteps/TypePickingStep.js";
import UserInformationStep from "../Forms/WizardSteps/UserInformationStep";

class SignUpPage extends React.Component {
  render() {
    const { clientSignup } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              {
                stepName: "Create Distributor or Retailer",
                stepComponent: TypePickingStep,
                stepId: "type",
              },
              {
                stepName: "User Information",
                stepComponent: UserInformationStep,
                stepId: "information",
              },
              {
                stepName: "Agency Information",
                stepComponent: AgencyInformation,
                stepId: "address",
              },
            ]}
            title="Sign Up"
            subtitle="Register new account"
            finishButtonClick={(values) => {
              clientSignup(parseNewUserInfo(values));
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
)(SignUpPage);
