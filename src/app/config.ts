import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? "https://abc.def.com" : "http://localhost:9090"
export const viewAllPizzaUrl = baseUrl + "/viewPizza"
export const viewFilteredPizzaUrl = baseUrl + "/viewpizza"
export const viewAllCouponUrl = baseUrl + "/showcouponlist"
export const saveOrderUrl = baseUrl + "/saveorder"
// export const cartUrl = baseUrl + "/cart"