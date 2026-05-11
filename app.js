export function canReadDashboard(user) {
  return Boolean(user && user.role === "admin");
}

export function canReadReports(user) {
  return Boolean(user && user.role === "report_viewer");
}
