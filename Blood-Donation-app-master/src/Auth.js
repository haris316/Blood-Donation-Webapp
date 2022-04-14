export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (localStorage.getItem("tok")) {
    return true;
  } else {
    return false;
  }
};
export default isAuthenticated;
