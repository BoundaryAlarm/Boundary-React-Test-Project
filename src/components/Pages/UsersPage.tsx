import React from "react";
import userServiceClient from "../../api/user-service-client";
import { connect } from 'react-redux';

interface IUsersPageState {
    users: Array<any>
}

class UsersPage extends React.Component<{}, IUsersPageState> {
    constructor(props){
        super(props);

        this.state = {
            users: new Array<any>()
        }
    }

    async componentDidMount() {
        let userDataReq = await userServiceClient.getAll();
        let userData = userDataReq.data;

        this.setState({users: userData.users});
    }

    render() {
        return (
            this.state.users != null &&
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Forename</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Active</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.first_name}</td>
                                    <td>{user.second_name}</td>
                                    <td>{user.email_address}</td>
                                    <td>{user.is_active ? 'Y' : 'N'}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        );
    }
}

export default connect()(UsersPage);
