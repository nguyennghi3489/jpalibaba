import history from "../history";

export const forwardTo = (location: string) => {
  history.push(location);
};
