import React, { useEffect, useState } from "react";
import fetchSpotifyData from "./podcastService";

const SpotifySearch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchSpotifyData();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data from Spotify");
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Access the podcasts from the data
  const podcasts = data?.podcasts?.items || [];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Spotify Search Results
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast) => {
          const { data: podcastData } = podcast; // Destructure the data object
          const showId = podcastData.uri.split(":")[2]; // Extract the show ID
          return (
            <a
              key={podcastData.uri}
              href={`https://open.spotify.com/show/${showId}`} // Construct the correct URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={podcastData.coverArt.sources[2].url} // Use the largest size
                alt={podcastData.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold">{podcastData.name}</h2>
              <p className="text-gray-500">
                Publisher: {podcastData.publisher.name}
              </p>
              <p className="text-gray-500">URI: {podcastData.uri}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SpotifySearch;
