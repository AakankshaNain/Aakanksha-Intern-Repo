import React, { useState } from "react";
import AxiosInstance from "../api/AxiosInstance";

// creating a test API request
const APIRequest = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await AxiosInstance.post("/tasks", {
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
      });
      setResponse(result.data);

    } catch (err) {
      if(err.code === 'ECONNABORTED'){
        setError('Request Timed Out, Try again!!');
      }
      else{
      setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-bold">Test API Request</h2>
      <button className="bg-blue-900 text-white py-2 px-5 rounded-md text-center"
      onClick={sendRequest} disabled={loading}>
        {loading ? "Loading" : "Send Request"}
      </button>
      {/* if response is not null, then it will be converted to JSON format */}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default APIRequest;
