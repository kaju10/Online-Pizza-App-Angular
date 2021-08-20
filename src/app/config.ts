import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? "https://abc.def.com" : "http://localhost:9090"
export const viewPizzaUrl = baseUrl + "/viewPizza"
export const cartUrl = baseUrl + "/cart"