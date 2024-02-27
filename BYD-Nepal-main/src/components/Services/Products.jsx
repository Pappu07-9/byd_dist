import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Products = () => {
    const [isAttoHover, setIsAttoHover] = useState(false);
    const [isDolphinHover, setIsDolphinHover] = useState(false);

    const navigate = useNavigate();

    const OnClickBackButton = () => {
        navigate("/services");
    };

    const OnClickAtto3Car = () => {
        navigate("/phone-number", { state: { car: "atto3" } });
    };

    const OnClickDolphinCar = () => {
        navigate("/phone-number", { state: { car: "dolphin" } });
    };

    return (
        <div className="container">
            <div className="product-background">
                <div className="filter-left"></div>
                {isAttoHover && (
                    <div className="assistant-box-atto3">
                        <div className="text-white byd-text">BYD</div>
                        <div className="text-white atto3-text">Atto3</div>
                    </div>
                )}

                {isDolphinHover && (
                    <div className="assistant-box-atto3 ms-5">
                        <div className="text-white byd-text">BYD</div>
                        <div className="text-white atto3-text">Dolphin</div>
                    </div>
                )}

                {!isDolphinHover && (
                    <div
                        className="atto3-car"
                        onMouseOver={() => setIsAttoHover(true)}
                        onMouseOut={() => setIsAttoHover(false)}
                        onClick={OnClickAtto3Car}></div>
                )}
                <div
                    className="dolphin-car"
                    onMouseOver={() => setIsDolphinHover(true)}
                    onMouseOut={() => setIsDolphinHover(false)}
                    onClick={OnClickDolphinCar}></div>
                <div className="back-box" onClick={OnClickBackButton}>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
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
                    <span className="text-white fw-medium">Vehicles</span>
                </div>
                {!isAttoHover && !isDolphinHover && (
                    <div className="car-text">
                        We currently have 2 vehicles for showcase:{" "}
                        <span className="fw-semibold">BYD Atto 3</span> and{" "}
                        <span className="fw-semibolde">BYD Dolphin</span>
                    </div>
                )}
                {isAttoHover && (
                    <div className="car-text">
                        Click the car to know more about BYD Atto 3
                    </div>
                )}

                {isDolphinHover && (
                    <div className="car-text">
                        Click the car to know more about BYD Dolphin
                    </div>
                )}
                <div className="assistant-container-right">
                    <div className="robot-image-right"></div>
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

export default Products;
