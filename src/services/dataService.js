import js from "@eslint/js";

const getSession = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return { token };
};

export const getUser = () => {
  const browserData = getSession();

  const email =  JSON.parse(localStorage.getItem("email"))

  if (browserData.token) {

    return {email}
  }
};
