import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import HashLoader from "react-spinners/HashLoader";

const Guidex = () => {
  const [formData, setFormData] = useState({
    technologyComfort: "",
    reasonsAvoidingTechnology: [],
    lackUnderstanding: "",
    concernPrivacy: "",
    trustTechnology: "",
    techSkills: "",
    accessibility: "",
    fearSecurityBreaches: "",
    complexityOfTech: "",
    perceivedBenefits: "",
    previousTechExperiences: "",
  });

  const [options, setOptions] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultiChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: [...formData[name], value],
    });
  };

  function extractJsonString(str) {
    const regex = /```json([\s\S]*?)```/;
    const match = str.match(regex);
    if (match && match[1]) {
      return match[1].trim();
    }
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const genAI = new GoogleGenerativeAI(
      "AIzaSyCLzLgikraSgNptmvZrMsGx9kWkVKbDo90"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        Analyze the user's perception about technology and their reluctance to use it based on the following responses:
        Comfort with technology: ${formData.technologyComfort}
        Main reasons for avoiding technology: ${formData.reasonsAvoidingTechnology.join(
          ", "
        )}
        Lack of understanding of how technology works: ${
          formData.lackUnderstanding
        }
        Concern about privacy when using technology: ${formData.concernPrivacy}
        Trust in technology companies and products: ${formData.trustTechnology}
        Self-assessed tech skills: ${formData.techSkills}
        Accessibility issues with technology: ${formData.accessibility}
        Fear of security breaches: ${formData.fearSecurityBreaches}
        Perception of the complexity of technology: ${formData.complexityOfTech}
        Perceived benefits of using technology: ${formData.perceivedBenefits}
        Previous experiences with technology: ${
          formData.previousTechExperiences
        }

        Generate a response that:
        1. Reassures the user by highlighting the benefits of technology and addressing common concerns with facts and positive outcomes.
        2. Clears misconceptions by providing evidence and examples that counter fears and uncertainties.
        3. Provides a balanced view of how technology can be integrated positively into the user's life, with emphasis on practical, achievable steps for overcoming apprehensions.
        4. Use a supportive and encouraging tone to help the user feel more comfortable and informed about technology.

        Structure of the response:
        {
          "user_perception": [
            "Point 1: User's perception",
            "Point 2: User's perception",
            ...
          ],
          "reassurance": [
            {
              "point": "Reassuring point",
              "explanation": "Explanation with evidence and examples to alleviate fears and misconceptions"
            },
            ...
          ]
        }`;

    try {
      const result = await model.generateContent(prompt);
      const jsonString = extractJsonString(result.response.text());
      const analysis = JSON.parse(jsonString);
      setOptions(analysis);
    } catch (error) {
      console.error("Error generating content:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-6">
                Technology Usage Perception
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Comfort with technology:
                      </span>
                    </label>
                    <select
                      id="technologyComfort"
                      name="technologyComfort"
                      value={formData.technologyComfort}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      <option value="">Select</option>
                      <option value="Very comfortable">Very comfortable</option>
                      <option value="Somewhat comfortable">
                        Somewhat comfortable
                      </option>
                      <option value="Not very comfortable">
                        Not very comfortable
                      </option>
                      <option value="Not comfortable at all">
                        Not comfortable at all
                      </option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Main reasons for avoiding technology:
                      </span>
                    </label>
                    <div className="space-y-2">
                      {[
                        "Lack of understanding",
                        "Privacy concerns",
                        "Fear of security breaches",
                        "Complexity of technology",
                        "Lack of trust in tech companies",
                        "Accessibility issues",
                        "Other",
                      ].map((reason) => (
                        <label
                          key={reason}
                          className="cursor-pointer flex items-center"
                        >
                          <input
                            type="checkbox"
                            name="reasonsAvoidingTechnology"
                            value={reason}
                            onChange={handleMultiChange}
                            className="checkbox"
                          />
                          <span className="ml-2">{reason}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {[
                    {
                      id: "lackUnderstanding",
                      text: "Do you feel that you lack understanding of how technology works?",
                    },
                    {
                      id: "concernPrivacy",
                      text: "Are you concerned about privacy when using technology?",
                    },
                    {
                      id: "trustTechnology",
                      text: "Do you trust technology companies and their products?",
                    },
                    {
                      id: "techSkills",
                      text: "How would you assess your own tech skills?",
                    },
                    {
                      id: "accessibility",
                      text: "Are there any accessibility issues with technology that you face?",
                    },
                    {
                      id: "fearSecurityBreaches",
                      text: "Do you fear security breaches when using technology?",
                    },
                    {
                      id: "complexityOfTech",
                      text: "Do you find technology to be complex?",
                    },
                  ].map(({ id, text }) => (
                    <div key={id} className="form-control">
                      <label className="label">
                        <span className="label-text">{text}</span>
                      </label>
                      <select
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                  ))}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        What benefits do you perceive in using technology?
                      </span>
                    </label>
                    <textarea
                      id="perceivedBenefits"
                      name="perceivedBenefits"
                      value={formData.perceivedBenefits}
                      onChange={handleChange}
                      className="textarea textarea-bordered w-full h-24"
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Describe any previous experiences you have had with
                        technology:
                      </span>
                    </label>
                    <textarea
                      id="previousTechExperiences"
                      name="previousTechExperiences"
                      value={formData.previousTechExperiences}
                      onChange={handleChange}
                      className="textarea textarea-bordered w-full h-24"
                    ></textarea>
                  </div>

                  <div className="py-4">
                    <button type="submit" className="btn btn-primary w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </form>

              {loading && (
                <div className="flex justify-center py-4">
                  <HashLoader color="#4A90E2" />
                </div>
              )}

              {options && (
                <div className="py-4">
                  <h2 className="text-lg font-semibold">Analysis</h2>
                  <div className="space-y-4">
                    {options.user_perception && (
                      <div>
                        <h3 className="text-md font-medium">
                          User Perception:
                        </h3>
                        <ul className="list-disc pl-5">
                          {options.user_perception.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {options.reassurance && (
                      <div>
                        <h3 className="text-md font-medium">Reassurance:</h3>
                        <ul className="list-disc pl-5">
                          {options.reassurance.map((item, index) => (
                            <li key={index}>
                              <strong>{item.point}</strong>: {item.explanation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidex;
