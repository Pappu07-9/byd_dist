import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

const PhoneNumber = () => {
  const [inputText, setInputText] = useState("");
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const navigate = useNavigate();

  const location = useLocation();

  const navigateToCar = () => {
    if (location.state.car === "dolphin") {
      navigate("/dolphin");
    } else if (location.state.car === "atto3") {
      navigate("/atto3");
    }
  };

  const OnClickBackButton = () => {
    navigate("/products");
  };

  const onClickSubmitButton = () => {
    handleApiCall();
  };

  const handleApiCall = async () => {
    try {
      //replace this url with backend deployed url after backend is deployed
      await axios.post("http://localhost:8000/api/otp/", {
        phone_number: inputText,
      });

      navigate("/otp-verify", {
        state: { car: location.state.car, phoneNumber: inputText },
      });
    } catch (error) {
      if (
        error.response.data.phone_number[0] ===
        "temp user with this phone number already exists."
      ) {
        navigateToCar();
      } else {
        setIsPhoneNumberError(true);
      }
    }
  };

  const handlePhoneNumberErrorText = () => {
    if (inputText === "") {
      return <div className="text-danger">Please enter the phone number</div>;
    } else if (inputText.length < 10) {
      return <div className="text-danger">Phone Number must be 10 digit</div>;
    } else if (inputText.length > 10) {
      return (
        <div className="text-danger">
          Phone Number must not be gretaer than 10 digit
        </div>
      );
    }
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
          <span className="text-white fw-medium">Phone Number</span>
        </div>
        <div className="phone-number-modal">
          <div className="phone-number-input-box">
            <div className="phone-number-text">Enter your phone number</div>
            <div class="phone-number-input">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.2187 15C11.6087 15 10.7519 14.7793 9.46875 14.0625C7.90844 13.1875 6.70156 12.3796 5.14969 10.8318C3.65344 9.33652 2.92531 8.36839 1.90625 6.51402C0.754998 4.42027 0.951248 3.32277 1.17062 2.8537C1.43187 2.29308 1.8175 1.95777 2.31594 1.62495C2.59905 1.43947 2.89865 1.28046 3.21094 1.14995C3.24219 1.13652 3.27125 1.1237 3.29719 1.11214C3.45187 1.04245 3.68625 0.937142 3.98312 1.04964C4.18125 1.12402 4.35812 1.2762 4.635 1.54964C5.20281 2.10964 5.97875 3.35683 6.265 3.96933C6.45719 4.38214 6.58437 4.65464 6.58469 4.96027C6.58469 5.31808 6.40469 5.59402 6.18625 5.89183C6.14531 5.94777 6.10469 6.0012 6.06531 6.05308C5.8275 6.36558 5.77531 6.45589 5.80969 6.61714C5.87937 6.9412 6.39906 7.90589 7.25312 8.75808C8.10719 9.61027 9.04406 10.0971 9.36937 10.1665C9.5375 10.2025 9.62969 10.1481 9.95219 9.90183C9.99844 9.86652 10.0459 9.82996 10.0956 9.79339C10.4287 9.54558 10.6919 9.37027 11.0412 9.37027H11.0431C11.3472 9.37027 11.6075 9.50214 12.0387 9.71964C12.6012 10.0034 13.8859 10.7693 14.4494 11.3378C14.7234 11.614 14.8762 11.7903 14.9509 11.9881C15.0634 12.2859 14.9575 12.5193 14.8884 12.6756C14.8769 12.7015 14.8641 12.73 14.8506 12.7615C14.7191 13.0733 14.5591 13.3722 14.3728 13.6546C14.0406 14.1515 13.7041 14.5362 13.1422 14.7978C12.8537 14.9342 12.5379 15.0034 12.2187 15Z"
                    fill="#737373"
                  />
                </svg>
              </span>
              <input
                required
                type="tel"
                id="myInput"
                placeholder="98**********"
                className="phone-input-class"
                onChange={handleChange}
                value={inputText}
              />
            </div>
            {isPhoneNumberError && handlePhoneNumberErrorText()}
            <div className="submit-button" onClick={onClickSubmitButton}>
              Submit
            </div>
          </div>
        </div>
        <div className="car-text phone-number text-white">
          Please enter your phone number
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

export default PhoneNumber;
