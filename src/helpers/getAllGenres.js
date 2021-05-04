export const getAllGenres = async () => {
  const resp = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/genre');
  return resp.json();
};
