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

function CreateUserPage({ clientSignup }) {
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
          title="Create New User"
          subtitle="Create new importer or retailer."
          finishButtonClick={(values) =>
            clientSignup(parseNewUserInfo(values), true)
          }
        />
      </GridItem>
    </GridContainer>
  );
}

export default connect(
  null,
  { clientSignup }
)(CreateUserPage);
