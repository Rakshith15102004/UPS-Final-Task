import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Customer Management System</h2>
      <AddCustomer />
      <CustomerList />
    </div>
  );
}

export default App;
