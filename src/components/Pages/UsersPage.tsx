import React from "react";
import userServiceClient from "../../api/user-service-client";
import {withBoundaryWebServiceClient} from "../graphql/hoc";
import UserResolver from "../../api/graphql/resolvers/user-resolver";
import { useQuery } from "@apollo/client";
import {TGetAllUsersResponse} from "../../api/graphql/types";

/*
const {
		loading: getInstallTaskLoading,
		error: getInstallTaskError,
		data: installRootTaskData,
	} = useQuery<{ task: ITask }>(TaskResolver.GET_TASK, {
		variables: { taskId: Number(rootTaskId) },
	});
 */

const UsersPage: React.FC =  () => {
    const {loading, error, data} = useQuery<TGetAllUsersResponse>(UserResolver.GET_ALL_USERS);

    if (loading) {
        return <span>Loading...</span>
    }

    if (error) {
        return (<div>
            <p>Error!</p>
            <p>{JSON.stringify(error)}</p>
        </div>)
    }

    if (!data) {
        return <div>Undefined Data? :(</div>
    }

    const allUsers = data.getUsers;

    return (
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
                allUsers.map((user, index) => {
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

export default withBoundaryWebServiceClient(UsersPage);
