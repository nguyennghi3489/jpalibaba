export const getErrorMessage = (input: string): string => {
  switch (input) {
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
    default:
      return "Unknown problem. Please contact our administrator to get support";
  }
};
