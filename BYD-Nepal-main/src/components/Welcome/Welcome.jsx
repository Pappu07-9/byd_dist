import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    localStorage.setItem("userName", inputText);

    const handleOnClick = () => {
        navigate("/phone-number");
    };

    return (
        <div className="container">
            <div className="landing-page">
                <div className="showroom-container">
                    <div className="logo"></div>
                    <div className="text-1">Welcome to Virtual Showroom Experience</div>
                    <div class="custom-input">
                        <input
                            type="text"
                            id="myInput"
                            placeholder="Your Name"
                            class="my-input-class"
                            onChange={handleChange}
                            value={inputText}
                        />
                    </div>
                    <button className="button-primary" onClick={handleOnClick}>
                        <span className="button-text">Get Started</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
