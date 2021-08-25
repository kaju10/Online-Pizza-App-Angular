import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? "https://abc.def.com" : "http://localhost:9090"
export const viewAllPizzaUrl = baseUrl + "/viewPizza"
export const viewFilteredPizzaUrl = baseUrl + "/viewpizza"
export const viewAllCouponUrl = baseUrl + "/showcouponlist"
export const saveOrderUrl = baseUrl + "/saveorder"
export const viewCustomerById = baseUrl + "/viewCustomer"
export const loginAdmin = baseUrl + "/AdminLogin"
export const loginCustomer = baseUrl + "/CustomerLogin"
export const viewMyOrders = baseUrl + "/viewOrdersOrdered"
export const viewAllOrders = baseUrl + "/showorder"
// export const cartUrl = baseUrl + "/cart"