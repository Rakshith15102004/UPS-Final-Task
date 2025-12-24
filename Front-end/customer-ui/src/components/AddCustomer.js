import { useState } from "react";
import { addCustomer } from "../services/customerService";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    customerName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const saveCustomer = () => {
    addCustomer(customer)
      .then(() => alert("Customer Added Successfully"))
      .catch(() => alert("Error saving customer"));
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Add Customer</h4>
      <input name="customerName" placeholder="Name" className="form-control mb-2" onChange={handleChange} />
      <input name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} />
      <input name="phone" placeholder="Phone" className="form-control mb-2" onChange={handleChange} />
      <button className="btn btn-primary" onClick={saveCustomer}>Save</button>
    </div>
  );
}

export default AddCustomer;
