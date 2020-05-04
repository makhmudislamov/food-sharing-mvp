import http from "./httpService";
import config from './config.json';
const apiEndPoint = config.dbUri + "/users";

export function register (user) {
    return http.post(apiEndPoint, {
        username: user.username,
        password: user.password,
        phoneNum: user.phoneNum,
        address: user.address,
        address2: user.address2,
        city: user.city,
        state: user.state,
        zipCode: user.zipCode
    });

}