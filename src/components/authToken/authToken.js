export const setToken = (token) => {
  localStorage.setItem("authToken", token);
};
export const getToken = () => {
  return localStorage.getItem("authToken");
};
export const removeToken = () => {
  return localStorage.removeItem("authToken");
};
