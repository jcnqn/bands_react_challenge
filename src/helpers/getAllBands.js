export const getAllBands = async () => {
  const resp = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands');
  return resp.json();
};
