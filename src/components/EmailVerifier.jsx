import { Email_Verification } from "../apis/authApi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const EmailVerifier = () => {
  const { token } = useParams(); 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await Email_Verification(token); 
      setMessage(res.message || "Email verified successfully.");
      setTimeout(()=>{
        return <Navigate to="/" replace />;
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed.");
    }
  };

  return (
    <div className="EmailVerifier">
      <p>Click the button to verify your Email</p>
      <button onClick={handleVerify}>Verify Now</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EmailVerifier;
