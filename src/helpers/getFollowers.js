export const getFollowers = (followers) => {
  const follow = followers + "";
  const arrow = follow.split("");
  const coma = ",";

  if (followers >= 100000) {
    arrow.splice(3, 0, coma);
    return arrow;
  } else if (followers >= 10000) {
    arrow.splice(2, 0, coma);
    return arrow;
  } else if (followers >= 1000) {
    arrow.splice(1, 0, coma);
    return arrow;
  } else {
    return arrow;
  }
};
