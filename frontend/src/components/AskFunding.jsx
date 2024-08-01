import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const AskForFundsPage = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState(""); // New state for description
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/funding", {
        title,
        amount,
        description,
      });
      console.log("Funding request saved:", response.data); // Log response to ensure correct storage
      setTitle("");
      setAmount("");
      setDescription(""); // Reset description
      setIsModalOpen(true); // Open the modal on successful submission
    } catch (error) {
      console.error("Error saving funding request:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 max-w-md mb-12">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Ask for Funds
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label htmlFor="title" className="label">
              <span className="label-text text-lg font-medium">
                Funding Request Title
              </span>
            </label>
            <input
              id="title"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter the title of your funding request"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount" className="label">
              <span className="label-text text-lg font-medium">
                Amount Needed
              </span>
            </label>
            <input
              id="amount"
              type="number"
              className="input input-bordered w-full"
              placeholder="Enter the amount needed"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="description" className="label">
              <span className="label-text text-lg font-medium">
                Description of Funding Need
              </span>
            </label>
            <textarea
              id="description"
              className="textarea textarea-bordered w-full"
              placeholder="Describe what you need funding for and explain your idea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit Funding Request
          </button>
        </form>
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
          Your funding request has been submitted and will be reviewed shortly.
        </p>
        <button onClick={closeModal} className="btn btn-primary mx-auto block">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AskForFundsPage;
