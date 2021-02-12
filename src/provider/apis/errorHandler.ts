export const getErrorMessage = (input: string): string => {
  switch (input) {
    case "identity.unactivated":
      return "This email hasn't been verified yet";
    case "email.unverified":
      return "This user hasn't confirmed the email verification";
    case "user.alreadyActivated":
      return "This user is already activated";
    case "identity.duplicated":
      return "Your Email is already registered. ";
    case "Iso date value expected":
      return "Please correct the Campaign dates";
    case "endDate.lessThan.startDate":
      return "Campaign End Date must be greater than Start date";
    case "startDate.lessThan.currentDate":
      return "Campaign Start Date must be started from today or on the future";
    case "email.invalid":
      return "Your Email is invalid. Please try again.";
    case "credentials.invalid":
      return "Your Email or Password is not correct";
    case "identity.notfound":
      return "We could not found your email in our system.";
    case "exception.unknown com.sksamuel.scrimage.ImageParseException":
      return "Please upload a product image";

    ///Product
    case "product.unavailablemodify":
      return "You can't delete/update this product. It has some running campaigns.";
    default:
      return "Unknown problem. Please contact our administrator to get support";
  }
};
