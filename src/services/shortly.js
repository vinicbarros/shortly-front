import axios from "axios";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("shortly"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

async function postSignUp(signUp) {
  const promise = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/signup`,
    signUp
  );
  return promise;
}

async function postSignIn(login) {
  const promise = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/signin`,
    login
  );
  return promise;
}

async function getRanking() {
  const promise = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/ranking`
  );
  return promise;
}

async function getMyUrl() {
  const config = createHeaders();
  const promise = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/users/me`,
    config
  );
  return promise;
}

async function postUrl(url) {
  const config = createHeaders();
  const promise = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/urls/shorten`,
    url,
    config
  );
  return promise;
}

async function deleteUrl(id) {
  const config = createHeaders();
  const promise = await axios.delete(
    `${import.meta.env.VITE_API_BASE_URL}/urls/${id}`,
    config
  );
  return promise;
}

async function openUrl(shortUrl) {
  const promise = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/urls/open/${shortUrl}`
  );
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getRanking,
  getMyUrl,
  postUrl,
  deleteUrl,
  openUrl,
};
