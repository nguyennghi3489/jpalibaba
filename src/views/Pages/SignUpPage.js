import React from "react";
import { clientSignup } from "actions/signup";
import { connect } from "react-redux";

import { parseNewUserInfo } from "helpers";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import ClientInformationStep from "../Forms/WizardSteps/ClientInformationStep.js";
import TypePickingStep from "../Forms/WizardSteps/TypePickingStep.js";
import AddresInformation from "../Forms/WizardSteps/AddresInformation.js";
// import Step3 from "./WizardSteps/Step3.js";

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
                stepId: "account",
              },
              {
                stepName: "Company Information",
                stepComponent: ClientInformationStep,
                stepId: "information",
              },
              {
                stepName: "Address Information",
                stepComponent: AddresInformation,
                stepId: "AddresI nformation",
              },
            ]}
            title="Sign Up"
            subtitle="Register new account"
            finishButtonClick={(values) =>
              clientSignup(parseNewUserInfo(values))
            }
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
