export const toLocalTime = timestamp => {
  const createAt = new Date(timestamp);
  return createAt.toLocaleString();
};
