import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import React from "react";

export const BOUNDARY_CLIENT_NAME = 'apollo_boundary_gql';
// eslint-disable-next-line import/no-mutable-exports
export let BOUNDARY_WS_CLIENT: ApolloClient<any>;

// eslint-disable-next-line @typescript-eslint/ban-types
export const withBoundaryWebServiceClient = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) =>
    function Component(props: P): JSX.Element {
        const connectToDevTools = process.env.NODE_ENV === 'development';
        const httpLink = createHttpLink({
            uri: process.env.REACT_APP_GRAPHQL_API_BASE_URL,
        });

        const authLink = setContext(async (_, {headers, ...context}) => {
            return {
                headers: {
                    ...headers,
                },
                ...context,
            };
        });

        BOUNDARY_WS_CLIENT = new ApolloClient({
            name: BOUNDARY_CLIENT_NAME,
            link: ApolloLink.from([authLink, httpLink]),
            cache: new InMemoryCache(),
            connectToDevTools,
            defaultOptions: {}
        });

        return (
            <ApolloProvider client={BOUNDARY_WS_CLIENT}>
                <WrappedComponent {...props} />
            </ApolloProvider>
        );
    };
