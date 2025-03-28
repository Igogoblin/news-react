export const formatDateAgo = (date) => {
  const now = new Date();
  const dat = new Date(date);
  const secondPast = (now.getTime() - dat.getTime()) / 1000;
  if (secondPast < 60) {
    return `${Math.floor(secondPast)} seconds ago`;
  }
  if (secondPast < 3600) {
    return `${Math.floor(secondPast / 60)} minutes ago`;
  }
  if (secondPast <= 86400) {
    return `${Math.floor(secondPast / 3600)} hours ago`;
  }
  if (secondPast > 86400) {
    const day = Math.floor(secondPast / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
};
