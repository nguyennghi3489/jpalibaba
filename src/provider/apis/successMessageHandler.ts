export const getSuccessMessage = (input: string): string => {
  switch (input) {
    case "emailForgotPassword.sent":
      return "Email Reset Password was sent. Please check email to get the instruction.";
    case "password.reset":
      return "Your password has been updated.";
    default:
      return "Your action is processed successfully";
  }
};
