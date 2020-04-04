interface AutResponse {
  jwt: String;
}

export const authenticateApi = (
  username: string,
  password: string
): Promise<AutResponse> => {
  // TOTO : Just mockup
  let token;
  switch (username) {
    case "admin":
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJOZ2hpIiwibGFzdE5hbWUiOiJOZ3V5ZW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.4iQQTv73AQFopzi9cCoVO0qoRl32x1WUPRamI1rdvss";
      break;
    case "importer":
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJOZ2hpIiwibGFzdE5hbWUiOiJOZ3V5ZW4iLCJyb2xlIjoiaW1wb3J0ZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.ZbSiipuTm6Dnp91UIhvYiUW3bKPhk_fe1jl4zULV2n0";
      break;
    default:
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJOZ2hpIiwibGFzdE5hbWUiOiJOZ3V5ZW4iLCJyb2xlIjoicmV0YWlsZXIiLCJpYXQiOjE1MTYyMzkwMjJ9._qaJKRzhed96_GDCuoRVDKBnUCBL6GYFfp7ib6bqzdE";
      break;
  }

  const mkData = {
    jwt: token
  };
  const mockupPromise = Promise.resolve(mkData);

  return mockupPromise;
};

export const recheckTokenApi = (token: string): Promise<boolean> => {
  const mockupPromise = Promise.resolve(true);

  return mockupPromise;
};
