import React, { useEffect, useRef, useState } from "react";

const OtpSender = ({ length, onSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    //alow only one number.

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //Move to next input after number enter.
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
    //After Otp enter.
    const combineOtp = newOtp.join("");
    // console.log(combineOtp);
    if (combineOtp.length === length) onSubmit(combineOtp);

   
  };

  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);
    //optional-->if any input field black before the input focus goes towords this.
    if (index > 0 && !otp[index - 1]) {
      inputRef.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key == "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className="otpSender">
      <h3>Otp...</h3>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            className="otpInput"
            ref={(input) => (inputRef.current[index] = input)}
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpSender;
