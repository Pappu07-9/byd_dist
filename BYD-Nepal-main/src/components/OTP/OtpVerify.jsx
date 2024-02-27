import React, { useState } from "react";

import OtpInput from "react-otp-input";

import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

const OtpVerify = () => {
  const [isOtpError, setIsOtpError] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpErrorMessage, setOtpErrorMessage] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const OnClickBackButton = () => {
    navigate("/phone-number");
  };

  const navigateToCar = () => {
    if (location.state.car === "dolphin") {
      navigate("/dolphin");
    } else if (location.state.car === "atto3") {
      navigate("/atto3");
    }
  };

  const onClickSubmitButton = () => {
    handleApiCall();
  };

  const handleApiCall = async () => {
    try {
      await axios.post(
        //replace this url with backend deployed url after backend is deployed
        ` http://host.docker.internal:8000/auth/verifyotp/${location.state.phoneNumber}/`,
        {
          otp: otp,
        }
      );
      navigateToCar();
    } catch (error) {
      setIsOtpError(true);
      setOtpErrorMessage(
        error.response.data.message || error.response.data.otp[0]
      );
    }
  };

  const handleResendApiCall = async () => {
    await axios.get(
      //replace this url with backend deployed url after backend is deployed
      ` http://host.docker.internal:8000/api/verifyotp/${location.state.phoneNumber}/`
    );
  };

  const inputStyle = {
    width: "3.125rem",
    height: "2rem",
    marginRight: "1rem",
    fontSize: "1rem",
    border: "none",
    borderBottom: "1px solid #000",
    outline: "none",
    textAlign: "center",
    paddingBottom: "10px",
    lineHeight: "24px",
    fontWeight: "600",
  };

  return (
    <div className="container">
      <div className="inside-byd">
        <div className="filter-left"></div>
        <div className="back-box" onClick={OnClickBackButton}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="40"
              height="40"
              rx="4"
              fill="white"
              fill-opacity="0.08"
            />
            <path
              d="M27 20H13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 27L13 20L20 13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-white fw-medium">OTP Code</span>
        </div>
        <div className="phone-number-modal otp-verify-modal">
          <div className="phone-number-input-box">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={inputStyle}
              renderInput={(props) => <input {...props} />}
            />
            {isOtpError && (
              <div className="text-danger pt-2">{otpErrorMessage}</div>
            )}

            <div
              className="submit-button otp-verify-button"
              onClick={onClickSubmitButton}
            >
              Verify
            </div>
            <div className="otp-text">
              <div className="receive-code-text">Didn’t receive code?</div>
              <div
                className="resend-code-text text-center"
                onClick={handleResendApiCall}
              >
                Re-send
              </div>
            </div>
          </div>
        </div>
        <div className="car-text otp-verify text-white">
          We have just send you 4 digit code via your email
        </div>
        <div className="assistant-container-right">
          <div className="assistant-image-right"></div>
          <div className="assistant-box">
            <div className="text-content">
              <div className="text-white nasso-text">NASSO</div>
              <div className="assistant-text">Assistant.</div>
            </div>
            <div className="assistant-box-text">Talk with our assistant</div>
          </div>
        </div>
        <div className="filter-container-right"> </div>
      </div>
    </div>
  );
};

export default OtpVerify;
