import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ViewFundingRequestsPage = () => {
  const [fundingRequests, setFundingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchFundingRequests = async () => {
      try {
        const response = await axios.get(
          "https://hack4change-zw20.onrender.com/funding"
        );
        setFundingRequests(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching funding requests");
        setLoading(false);
        console.error("Error fetching funding requests:", err);
      }
    };

    fetchFundingRequests();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  const handleFundClick = (id) => {
    navigate(`/AnswerFunding/${id}`); // Navigate to the funding page with the request ID
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-10 text-center text-blue-600">
        All Funding Requests
      </h1>
      <ul className="space-y-4">
        {fundingRequests.length === 0 ? (
          <p className="text-center text-lg">No funding requests available.</p>
        ) : (
          fundingRequests.map((request) => (
            <li
              key={request._id}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200 mb-4"
            >
              <h2 className="text-xl font-semibold mb-2">{request.title}</h2>
              <p className="text-lg mb-2">Amount: ${request.amount}</p>
              <p className="mb-4">{request.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleFundClick(request._id)} // Call handleFundClick with the request ID
              >
                Fund
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ViewFundingRequestsPage;
