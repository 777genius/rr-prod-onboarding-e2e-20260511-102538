export function canReadDashboard(user) {
  return Boolean(user && user.role === "admin");
}

export function canAccessBillingAdmin(user) {
  return Boolean(user);
}
