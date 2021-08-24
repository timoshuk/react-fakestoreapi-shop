export const cropText = (text, cropNum) => {
  return text.split(" ", cropNum).join(" ");
};
