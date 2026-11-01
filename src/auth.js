// Roles in this shop admin: "manager" and "staff".
export function useCurrentUser() {
  return window.__CURRENT_USER__ || { name: "Guest", role: "staff" };
}
export const canExportOrders = (user) => user.role === "manager";
