export default ({ req, app }) => {
  return {
    httpEndpoint: 'http://localhost:4000',
    wsEndpoint: 'ws://localhost:5000',
    tokenName: 'apollo-token',
  };
};
