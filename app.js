export function canReadDashboard(user) {
  return Boolean(user && user.role === "admin");
}

export const smokeAwsAccessKey = "AKIAIOSFODNN7EXAMPLE";
