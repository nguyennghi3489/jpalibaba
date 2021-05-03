import history from "../history";

export const forwardTo = (location: string) => {
  history.push(location);
};

export const goBack = (location: string) => {
  if (history.length > 0) {
    history.goBack();
  } else {
    history.push(location);
  }
};
