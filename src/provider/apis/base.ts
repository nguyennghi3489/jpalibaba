export const callApi = async <T>(
  method: any,
  url = "",
  data: any = null
): Promise<T> => {
  let header = {};
  if (method !== "GET") {
    header = { "Content-Type": "application/json" };
  }

  if (localStorage.getItem("token")) {
    header = Object.assign(header, {
      Authorization: localStorage.getItem("token"),
    });
  }

  let options: RequestInit = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: header,
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };
  if (data) {
    options.body = JSON.stringify(data);
  }

  // Default options are marked with *
  const result = await fetch(url, options);
  const body = await result.json();
  return body;
  //   return response.json(); // parses JSON response into native JavaScript objects
};

export const callUploadApi = async (
  method: any,
  url = "",
  formData: any = null
) => {
  let header = {};

  if (localStorage.getItem("token")) {
    header = Object.assign(header, {
      Authorization: localStorage.getItem("token"),
    });
  }

  let options: RequestInit = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: header,
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };
  if (formData) {
    options.body = formData;
  }

  // Default options are marked with *
  const result = await fetch(url, options);
  return result.json();
  //   return response.json(); // parses JSON response into native JavaScript objects
};
