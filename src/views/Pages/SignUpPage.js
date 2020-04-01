import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import ClientInformationStep from "../Forms/WizardSteps/ClientInformationStep.js";
import TypePickingStep from "../Forms/WizardSteps/TypePickingStep.js";
// import Step3 from "./WizardSteps/Step3.js";

export default function SignUpPage() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            {
              stepName: "Create Distributor or Retailer",
              stepComponent: TypePickingStep,
              stepId: "account"
            },
            {
              stepName: "Information",
              stepComponent: ClientInformationStep,
              stepId: "information"
            }
          ]}
          title="Sign Up"
          subtitle="Register new account"
          finishButtonClick={e => alert(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
