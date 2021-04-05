import {BoundaryJSClient} from "./basclient";

let userServiceClient = new BoundaryJSClient(process.env.REACT_APP_API_BASE_URL + '/api/users');

export default {

    getAll() {
        return userServiceClient.get('');
    }
}
