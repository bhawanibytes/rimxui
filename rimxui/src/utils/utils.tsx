export const mc = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
