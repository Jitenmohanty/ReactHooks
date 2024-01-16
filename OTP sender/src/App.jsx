import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OtpSender from "./components/OtpSender";

function App() {
  const [number, setNumber] = useState("");
  const [otpSend, setOtpSend] = useState(false);
  const handleSubmit = () => {
    const regex = /[^0-9]/g;
    if (number.length < 10 || regex.test(number)) {
      alert("Invalid Phone Number");
      return;
    }
    setOtpSend(true);
  };
  const onOtpSubmit = (otp)=>{
    console.log("Login successfully!",otp)
  }
  return (
    <>
      {otpSend ? (
        <OtpSender length={4} onSubmit={onOtpSubmit} />
      ) : (
        <div>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default App;
