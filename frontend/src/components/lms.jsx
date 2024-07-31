import React, { useState, useEffect } from "react";

const HackerNewsSearch = () => {
  const [query, setQuery] = useState("Technology");
  const [hits, setHits] = useState([]);

  useEffect(() => {
    const fetchHits = async () => {
      try {
        const response = await fetch(
          `http://hn.algolia.com/api/v1/search?query=${query}&tags=story&hitsPerPage=10`
        );
        const data = await response.json();
        setHits(data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHits();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hacker News Search</h1>
      <input
        type="text"
        placeholder="Search for news (e.g., Technology, Latest News)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input input-bordered w-full max-w-xs mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hits.map((hit) => (
          <div key={hit.objectID} className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">{hit.title}</h2>
              <a
                href={hit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackerNewsSearch;
