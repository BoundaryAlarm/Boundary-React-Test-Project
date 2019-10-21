import { connect } from 'react-redux';
import { Router, Route} from 'react-router';
import { browserHistory} from "./browserhistory";
import DashboardPage from '../components/Pages/DashboardPage';
import LoginPage from "../components/Pages/LoginPage";

import './App.css';
import RegisterPage from "../components/Pages/RegisterPage";
import UsersPage from "../components/Pages/UsersPage";
import * as React from "react";
import ProtectedRoute from "../components/Routes/ProtectedRoute";

class App extends React.Component {
  constructor(props) {
    super(props);
    browserHistory.listen(() => {});
  }

  render() {
    return (
        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-8-col-sm-offset-2">
              <Router history={browserHistory}>
                <div>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/register" component={RegisterPage}/>
                  <ProtectedRoute exact path="/" component={DashboardPage} authStore={
                    // @ts-ignore
                    this.props.auth}/>
                  <ProtectedRoute exact path="/users" component={UsersPage} authStore={
                    //@ts-ignore
                    this.props.auth}/>
                </div>
              </Router>
            </div>
          </div>
        </div>
    );
  }
}

export default connect((state) => ({
  //@ts-ignore
  auth: state.auth
}))(App);
