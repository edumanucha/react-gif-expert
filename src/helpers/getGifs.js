export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=jZgGqHYfAHpTabJRPIcvwnIGePqOQPpB&q=${category}&limit=10`;
  // ahora hacemos la peticion http
  const resp = await fetch(url);
  // ahora desestructuramos la data
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
