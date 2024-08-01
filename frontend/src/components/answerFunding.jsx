import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

const AnswerFundingRequestPage = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchRequest = async () => {
    try {
      const response = await axios.get(
        `https://hack4change-zw20.onrender.com/funding/${id}`
      );
      setRequest(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching funding request");
      setLoading(false);
      console.error("Error fetching funding request:", err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://hack4change-zw20.onrender.com/funding/${id}`,
        {
          amount,
          email,
          contactNumber,
        }
      );
      setRequest(response.data);
      setAmount("");
      setEmail("");
      setContactNumber("");
      setIsModalOpen(true); // Open the modal on successful submission
    } catch (err) {
      setError("Error contributing to the funding request");
      console.error("Error contributing to the funding request:", err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-xl">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 max-w-xl">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  if (!request) {
    return (
      <div className="container mx-auto p-6 max-w-xl">
        <p className="text-center">Funding request not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">
        Funding Request
      </h1>
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200 mb-6">
        <h2 className="text-2xl font-semibold mb-4">{request.title}</h2>
        <p className="text-lg mb-4">Amount Needed: ${request.amount}</p>
        <p className="mb-4">{request.description}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200 mb-6"
      >
        <input
          type="number"
          className="input input-bordered w-full p-2 mb-4"
          placeholder="Enter amount to contribute"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="email"
          className="input input-bordered w-full p-2 mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          className="input input-bordered w-full p-2 mb-4"
          placeholder="Enter your contact number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Contribute
        </button>
      </form>
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Contributions</h2>
        <ul className="space-y-2">
          {request.contributions.map((contribution, index) => (
            <li
              key={index}
              className="border p-4 mb-2 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg"
            >
              For contibution of ${contribution.amount} contact this person with
              mail ID {contribution.email} Contact Number : (
              {contribution.contactNumber})
            </li>
          ))}
        </ul>
      </div>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Thank You Modal"
        className="modal-content bg-white bg-opacity-90 shadow-lg rounded-lg p-6 border border-gray-200"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Thank You!</h2>
        <p className="text-center mb-6">
          Thank you for your contribution. Your support is greatly appreciated!
        </p>
        <button onClick={closeModal} className="btn btn-primary mx-auto block">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AnswerFundingRequestPage;
