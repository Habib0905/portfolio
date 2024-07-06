import React, { useState } from "react";
import axios from "axios";
import PopUp from "./PopUp";

const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("userEmail", userEmail);
    formData.append("subject", subject);
    formData.append("body", message); // Ensure this matches the parameter name in the controller
    setPopupType("wait");
    setPopupVisible(true);

    try {
      await axios.post("http://localhost:8080/contact", formData);
      setPopupType("success");
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000); // Hide the pop-up after 3 seconds
    } catch (error) {
      setPopupType("error");
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000); // Hide the pop-up after 3 seconds
    }
  };
  return (
    <div>
      <PopUp type={popupType} isVisible={popupVisible} />
      <form onSubmit={handleSubmit}>
        <div className="relative min-h-screen md:w-full bg-gradient-to-b from-blue-800 via-blue-700 to-gray-900 text-center flex flex-col items-center overflow-hidden">
          <div className="absolute bottom-32 flex flex-col items-center w-full">
            <h1 className="text-3xl text-white  font-bold mb-1">Contact Me</h1>

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered border-white input-primary w-full max-w-md m-1.5"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered border-white input-primary w-full max-w-md m-1.5"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Email ID"
              className="input input-bordered border-white input-primary w-full max-w-md m-1.5"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Write Your Message Here"
              className="textarea textarea-bordered border-white textarea-sm w-full max-w-md m-1.5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              className="btn btn-active btn-neutral bg-gray-950 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
