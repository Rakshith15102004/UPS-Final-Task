import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(res => setCustomers(res.data));
  }, []);

  return (
    <div className="card p-3">
      <h4>Customer List</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.customerId}>
              <td>{c.customerName}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
