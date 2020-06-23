export const getErrorMessage = (input: string): string => {
  switch (input) {
    case "credentials.invalid":
      return "Your Email or Password is not correct";
    default:
      return "Unknown problem. Please contact our administrator to get support";
  }
};
