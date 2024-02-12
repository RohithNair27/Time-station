export const storeAccessTokenInLocal = (AccessToken) => {
  localStorage.setItem("AccessToken", AccessToken);
};
export const checkAcessTokenInLocal = () => {
  return localStorage.getItem("AccessToken");
};
