import {BoundaryJSClient} from "./basclient";

let authServiceClient = new BoundaryJSClient(process.env.REACT_APP_API_BASE_URL + '/api/auth');

export default {

    login(loginData) {
        return authServiceClient.post('/login', loginData);
    },

    register(accountData) {
    }
}