export const defaultColor = "#116AB0";

export const defaultProvinceColor = [
  "#116AB0",
  "#116AB0",
  "#116AB0",
  "#116AB0",
  "#116AB0",
  "#116AB0",
  "#116AB0",
];

export const getRandomColor = () => {
  return "#" + Math.random().toString(16).slice(-6);
};
