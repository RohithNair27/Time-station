export const storeAccessTokenInLocal = (AccessToken) => {
  try {
    sessionStorage.setItem("AccessToken", AccessToken);
    sessionStorage.setItem("loggedIn", true);
    return "Added to session";
  } catch {
    return "Not added";
  }
};
export const checkAcessTokenInLocal = () => {
  return sessionStorage.getItem("AccessToken");
};
export const deleteAccessToken = () => {
  sessionStorage.clear();
};
