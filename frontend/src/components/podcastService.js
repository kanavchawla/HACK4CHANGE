import axios from "axios";

const fetchSpotifyData = async () => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: "tech learn hindi",
      type: "podcasts",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "x-rapidapi-key": "474aed5014mshc8112c8b5ef0830p18f1fdjsn0aec92f4aedc",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data; // Return the data
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data from Spotify");
  }
};

export default fetchSpotifyData;
