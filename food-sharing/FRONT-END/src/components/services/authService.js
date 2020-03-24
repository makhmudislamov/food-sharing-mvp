import http from "./httpService";
import dbUri from "./config.json";
const apiEndPoint = dbUri + "/auth";


export function login(email, password) {
    return http.post(apiEndPoint, {email, password});
}