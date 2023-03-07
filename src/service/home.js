const API_PATH = "http://38.242.142.81:5001";

async function fetchData(url = "", data = {}, token) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',headers:
      Authorization: "Bearer " + token,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

export const getGalleries = async () => {
  return await fetch(API_PATH + "/galleries").then((response) =>
    response.json()
  );
};

export const login = (data) => {
  return fetchData(API_PATH + "/auth/login", data);
};

export const logout = async (token) => {
  return await fetch(API_PATH + "/auth/logout", {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response) => response.json());
};

export const getPost = async (params, token) => {
  const nonNullData = Object.entries(params).reduce((obj, [key, value]) => {
    if (value !== null && value !== undefined) {
      obj[key] = value;
    }
    return obj;
  }, {});

  return await fetch(API_PATH + "/posts?" + new URLSearchParams(nonNullData), {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response) => response.json());
};

export const getTag = async (token) => {
  return await fetch(API_PATH + "/posts/tags", {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response) => response.json());
};

export const createPosts = async (data, token) => {
  return await fetchData(API_PATH + "/posts", data, token);
};

export const updatePosts = async (id, data, token) => {
  return await fetch(API_PATH + "/posts/" + id, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  }).then((response) => response);
};

export const deletePosts = async (id, token) => {
  return await fetch(API_PATH + "/posts/" + id, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response) => response);
};
