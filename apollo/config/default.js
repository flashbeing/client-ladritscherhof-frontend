import cache from './cache';

export default ({ req, app }) => {
  return {
    // required
    httpEndpoint: 'http://localhost:4000/graphql',
    // optional
    // override HTTP endpoint in browser only
    browserHttpEndpoint: '/graphql',
    // optional
    // See https://www.apollographql.com/docs/link/links/http.html#options
    httpLinkOptions: {
      credentials: 'same-origin',
    },
    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    wsEndpoint: null, // optional
    // LocalStorage token
    tokenName: 'apollo-token', // optional
    // Enable Automatic Query persisting with Apollo Engine
    persisting: false, // Optional
    // Use websockets for everything (no HTTP)
    // You need to pass a `wsEndpoint` for this to work
    websocketsOnly: false, // Optional

    cache,
  };
};
