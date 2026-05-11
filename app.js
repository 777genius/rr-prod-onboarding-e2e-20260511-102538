export function canReadDashboard(user) {
  return Boolean(user && user.role === "admin");
}
