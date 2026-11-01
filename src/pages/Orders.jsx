import { useCurrentUser, canExportOrders } from "../auth";

function toCsv(orders) {
  const header = "Date,Customer,Total,Status";
  const rows = orders.map((o) => [o.date, o.customer, o.total.toFixed(2), o.status].join(","));
  return [header, ...rows].join("\n");
}

export default function OrdersPage({ orders, filters }) {
  const user = useCurrentUser();
  const visible = orders.filter((o) => (!filters.status || o.status === filters.status)
    && (!filters.from || o.date >= filters.from) && (!filters.to || o.date <= filters.to));

  function exportCsv() {
    const blob = new Blob([toCsv(visible)], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `orders-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  }

  return (
    <div>
      <h1>Orders</h1>
      <p>Use the Status and Date filters above the table to narrow the list.</p>
      {canExportOrders(user) && (
        <button onClick={exportCsv} disabled={visible.length === 0}>Export CSV</button>
      )}
      <table>{/* order rows */}</table>
    </div>
  );
}
