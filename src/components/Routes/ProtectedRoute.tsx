import React from 'react';
import {Route, Redirect, RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";

interface IProtectedRootProps {
    component: any
    authStore: any; // ToDo : Type.
    exact?: boolean,
    history?: any,
    path: string
}

type AllProps = IProtectedRootProps & RouteComponentProps;

class InternalProtectedRoute extends React.Component<AllProps, {}> {
    render() {
        const {component: Component, authStore: auth, ...rest} = this.props;
        return (
            <Route {...rest} render={props => {
                return localStorage.getItem('isAuth') ? <Component {...props} /> :
                    <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }}/>
        );
    }
}

const ProtectedRoute = withRouter(connect()(InternalProtectedRoute));

export default ProtectedRoute;
