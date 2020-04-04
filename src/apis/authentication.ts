interface AutResponse {
  jwt: String;
}

function parseJwt(token: any) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const authenticateApi = (
  username: String,
  password: String
): Promise<AutResponse> => {
  // TOTO : Just mockup
  const token =
    "eyJmaXJzdE5hbWUiOiJOZ2hpIiwibGFzdE5hbWUiOiJOZ3V5ZW4iLCJyb2xlIjoiYWRtaW4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7o0Ioq4ogdfEMmdKNiWfuggIPjWf46QyG2z622WXr0k";

  console.log(parseJwt(token));
  const mkData = {
    jwt: token
  };
  const mockupPromise = Promise.resolve(mkData);

  return mockupPromise;
};
