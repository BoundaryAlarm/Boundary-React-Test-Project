import authServiceClient from "../../api/auth-service-client";
import {browserHistory} from "../../core/browserhistory";

export const USER_LOGGED_OUT = '@@auth/LOG_OUT';
export const USER_LOGIN_REQUEST = '@@auth/LOG_IN_REQ';
export const USER_LOGIN_SUCCESS = '@@auth/LOG_IN_SUCCESS';
export const USER_LOGIN_FAILURE = '@@auth/LOG_IN_FAILURE';

export function actionLoginSuccess() {
    return {
        type: USER_LOGIN_SUCCESS
    }
};

export function actionLoginFailure(error) {
    return {
        type: USER_LOGIN_FAILURE,
        error
    }
};

export function eventLoginAsync(username, password) {
    return async (dispatch) => {

        let payload = {username: username, password: password};

        dispatch({ type: USER_LOGIN_REQUEST, payload: payload});

        try {
            let response = await authServiceClient.login(payload);

            // '/' is the browser history page, pushing this key will allow us to move on
            browserHistory.push('/');

            dispatch(actionLoginSuccess());
            return response;
        } catch (e) {
            dispatch(actionLoginFailure(e));
        }
    }
}
