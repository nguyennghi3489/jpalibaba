import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import InformationStep from "../Forms/WizardSteps/InformationStep.js";
import TypePickingStep from "../Forms/WizardSteps/TypePickingStep.js";
// import Step3 from "./WizardSteps/Step3.js";

export default function CreateUserPage() {
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
              stepComponent: InformationStep,
              stepId: "information"
            }
          ]}
          title="Create New User"
          subtitle="Create new importer or retailer."
          finishButtonClick={e => alert(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
