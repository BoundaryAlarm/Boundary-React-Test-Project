import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class DashboardPage extends React.Component {
    render() {
        return (
            <div>
                Dashboard!

                <Link to="/users" className="btn btn-link">Users</Link>
            </div>
        );
    }
}

export default connect()(DashboardPage);
