import axios from "axios";

const API_URL = "https://localhost:7014/api/customers";

export const getCustomers = () => axios.get(API_URL);
export const addCustomer = (customer) => axios.post(API_URL, customer);
