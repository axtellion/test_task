export const addToLokal = (array) => {
  localStorage.setItem("users", JSON.stringify(array));
};
