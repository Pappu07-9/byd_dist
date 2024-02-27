import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import firstImage from "../../../assets/atto3-car1.png";
import secondImage from "../../../assets/atto3-car2.png";
import thirdImage from "../../../assets/atto3-car3.png";

// import pdf from "../../../assets/BYDATTO3100kWBrochure.pdf"

const Atto3 = () => {
    const [isFirstImageClicked, setIsFirstImageClicked] = useState(true);
    const [isSecondImageClicked, setIsSecondImageClicked] = useState(false);
    const [isThirdImageClicked, setIsThirdImageClicked] = useState(false);
    const [isBodyClicked, setIsBodyClicked] = useState(false);
    const [isInteriorsClicked, setIsInteriorsClicked] = useState(false);
    const [isTyreClicked, setIsTyreClicked] = useState(false);
    const [isGroundClicked, setIsGroundClicked] = useState(false);
    const [isEngineClicked, setIsEngineClicked] = useState(false);
    const [isUpperExteriorsClicked, setIsUpperExteriorsClicked] = useState(false);
    const [isLowerExteriorsClicked, setIsLowerExteriorsClicked] = useState(false);
    const [isTrunkClicked, setIsTrunkClicked] = useState(false);
    const [isGetInsideClicked, setIsGetInsideClicked] = useState(false);
    const [isHideHotspotsClicked, setIsHideHotspotsClicked] = useState(false);

    const navigate = useNavigate();

    const OnClickInteriorButton = () => {
        navigate("/interiors");
    };

    const OnClickEngineButton = () => {
        navigate("/engine");
    };

    const OnClickTrunkButton = () => {
        navigate("/trunk");
    };

    const OnClickShowroomButton = () => {
        navigate("/services");
    };

    const OnClickVehiclesButton = () => {
        navigate("/products");
    };

    const onFistImageClicked = () => {
        setIsFirstImageClicked(true);
        setIsSecondImageClicked(false);
        setIsThirdImageClicked(false);
    };

    const onSecondImageClicked = () => {
        setIsFirstImageClicked(false);
        setIsSecondImageClicked(true);
        setIsThirdImageClicked(false);
    };

    const onThirdImageClicked = () => {
        setIsFirstImageClicked(false);
        setIsSecondImageClicked(false);
        setIsThirdImageClicked(true);
    };

    const bodyOnClick = () => {
        setIsBodyClicked(true);
    };

    const closeIconOnClick = () => {
        setIsBodyClicked(false);
        setIsGroundClicked(false);
        setIsInteriorsClicked(false);
        setIsTyreClicked(false);
        setIsEngineClicked(false);
        setIsUpperExteriorsClicked(false);
        setIsLowerExteriorsClicked(false);
        setIsTrunkClicked(false);
        setIsGetInsideClicked(false);
    };

    const onClickHideHubspots = () => {
        setIsHideHotspotsClicked(true);
        closeIconOnClick();
    };

    const isButtonContainerEnd =
        isBodyClicked ||
        isGroundClicked ||
        isTyreClicked ||
        isInteriorsClicked ||
        isSecondImageClicked ||
        isThirdImageClicked ||
        isHideHotspotsClicked;

    const isButtonVisible =
        !isBodyClicked &&
        !isGroundClicked &&
        !isTyreClicked &&
        !isInteriorsClicked &&
        !isSecondImageClicked &&
        !isThirdImageClicked &&
        !isHideHotspotsClicked;

    const isPerferenceBox =
        !isBodyClicked &&
        !isGroundClicked &&
        !isTyreClicked &&
        !isInteriorsClicked &&
        !isSecondImageClicked &&
        !isThirdImageClicked &&
        !isHideHotspotsClicked;

    const isCloseIcon =
        isBodyClicked ||
        isGroundClicked ||
        isTyreClicked ||
        isInteriorsClicked ||
        isEngineClicked ||
        isUpperExteriorsClicked ||
        isLowerExteriorsClicked ||
        isTrunkClicked ||
        isGetInsideClicked;

    const isAssistantContainer =
        !isBodyClicked &&
        !isGroundClicked &&
        !isTyreClicked &&
        !isInteriorsClicked &&
        !isThirdImageClicked &&
        !isEngineClicked &&
        !isUpperExteriorsClicked &&
        !isLowerExteriorsClicked &&
        !isHideHotspotsClicked;

    const isBackShowroom =
        !isFirstImageClicked && !isEngineClicked && !isTrunkClicked;

    const isCarSlider =
        !isBodyClicked && !isGroundClicked && !isTyreClicked && !isInteriorsClicked;

    return (
        <div className="car-showroom-container">
            <div className="byd-text text-white">BYD</div>
            <div className="atto3-text text-white">Atto3</div>
            <div className="interior-link atto3-top-nav">
                <span onClick={OnClickVehiclesButton}>
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
                </span>
                Vehicles
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path d="M10 17L15 12L10 7V17Z" fill="white" />
                </svg>
                <span className="text-white">Atto3</span>
            </div>
            <div className="row">
                <div
                    className={`button-container ${isButtonContainerEnd && "button-container-end"
                        }`}>
                    {isButtonVisible && (
                        <>
                            <a href="./src/assets/BYDATTO3100kWBrochure.pdf" className="button-class">
                                Download
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M9.99999 13.334L5.83333 9.16732L6.99999 7.95898L9.16666 10.1256V3.33398H10.8333V10.1256L13 7.95898L14.1667 9.16732L9.99999 13.334ZM4.99999 16.6673C4.54166 16.6673 4.14944 16.5043 3.82333 16.1782C3.49722 15.852 3.33388 15.4595 3.33333 15.0007V12.5007H4.99999V15.0007H15V12.5007H16.6667V15.0007C16.6667 15.459 16.5036 15.8515 16.1775 16.1782C15.8514 16.5048 15.4589 16.6679 15 16.6673H4.99999Z"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </a>
                            <button className="button-class">Call center</button>
                            <button className="button-class" onClick={OnClickShowroomButton}>
                                Back to showroom
                            </button>
                        </>
                    )}
                    {!isHideHotspotsClicked ? (
                        <button
                            className="border-0 button-class"
                            onClick={onClickHideHubspots}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM12 4.5C17 4.5 21.27 7.61 23 12C21.27 16.39 17 19.5 12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5ZM3.18 12C3.98825 13.6503 5.24331 15.0407 6.80248 16.0133C8.36165 16.9858 10.1624 17.5013 12 17.5013C13.8376 17.5013 15.6383 16.9858 17.1975 16.0133C18.7567 15.0407 20.0117 13.6503 20.82 12C20.0117 10.3497 18.7567 8.95925 17.1975 7.98675C15.6383 7.01424 13.8376 6.49868 12 6.49868C10.1624 6.49868 8.36165 7.01424 6.80248 7.98675C5.24331 8.95925 3.98825 10.3497 3.18 12Z"
                                    fill="#F1FAEE"
                                />
                            </svg>
                            Hide hotspots
                        </button>
                    ) : (
                        <button
                            className="border-0 button-class"
                            onClick={() => setIsHideHotspotsClicked(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M2 5.27L3.28 4L20 20.72L18.73 22L15.65 18.92C14.5 19.3 13.28 19.5 12 19.5C7 19.5 2.73 16.39 1 12C1.69 10.24 2.79 8.69 4.19 7.46L2 5.27ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15.0005 12.3406 14.943 12.6787 14.83 13L11 9.17C11.3213 9.05698 11.6594 8.99949 12 9ZM12 4.5C17 4.5 21.27 7.61 23 12C22.1839 14.0732 20.7969 15.8727 19 17.19L17.58 15.76C18.9629 14.8034 20.0782 13.5091 20.82 12C20.0116 10.3499 18.7564 8.95977 17.1973 7.9875C15.6381 7.01524 13.8375 6.49988 12 6.5C10.91 6.5 9.84 6.68 8.84 7L7.3 5.47C8.74 4.85 10.33 4.5 12 4.5ZM3.18 12C3.98844 13.6501 5.24357 15.0402 6.80273 16.0125C8.36189 16.9848 10.1625 17.5001 12 17.5C12.69 17.5 13.37 17.43 14 17.29L11.72 15C11.0242 14.9254 10.3748 14.6149 9.87997 14.12C9.38512 13.6252 9.07458 12.9758 9 12.28L5.6 8.87C4.61 9.72 3.78 10.78 3.18 12Z"
                                    fill="#F1FAEE"
                                />
                            </svg>
                            Hide hotspots
                        </button>
                    )}

                    <button className="mode-button">
                        <span className="text-black bg-white p-2">2d</span>
                        <span className="text-white p-2">3d</span>
                    </button>
                </div>
            </div>

            {isPerferenceBox && (
                <div className="position-absolute perferance-box">
                    <div className="text-white">What would you like to do?</div>
                    <div className="perference-button-container">
                        <button className="button-class">Finance</button>
                        <button className="button-class">Exchange</button>
                        <button className="button-class">Test drive</button>
                    </div>
                </div>
            )}
            {isCloseIcon && (
                <div className="close-svg" onClick={closeIconOnClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M16.875 7.125L7.125 16.875M7.125 7.125L16.875 16.875"
                            stroke="#F1FAEE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            )}
            {isFirstImageClicked && (
                <div
                    className={`atto3-first-image ${(isBodyClicked ||
                        isGroundClicked ||
                        isTyreClicked ||
                        isInteriorsClicked ||
                        isHideHotspotsClicked) &&
                        "atto3-image-width"
                        } ${isHideHotspotsClicked && "atto3-hide-hubspot-image"}`}>
                    {!isGroundClicked &&
                        !isTyreClicked &&
                        !isInteriorsClicked &&
                        !isHideHotspotsClicked && (
                            <>
                                <div className="dot-svg1-car-1" onClick={bodyOnClick}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none">
                                        <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14.5"
                                            stroke="#F1FAEE"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    {isBodyClicked && (
                                        <>
                                            <div className="body-box body-position">Headlight</div>
                                            <div className="body-line-svg">

                                            </div>
                                        </>
                                    )}
                                </div>
                                {isBodyClicked && (
                                    <div className="description-container">
                                        <ul>
                                            <li className="data-list">
                                                {`Standard LED headlights and taillights provide excellent visibility and enhance the car's modern look.`}
                                                {/* <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="5"
                                                    height="6"
                                                    viewBox="0 0 5 6"
                                                    fill="none">
                                                    <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                </svg> */}
                                            </li>
                                            <li className="data-list">
                                                {`Optional 360-degree camera system enhances visibility and aids in parking maneuvers.`}
                                                {/* <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="5"
                                                    height="6"
                                                    viewBox="0 0 5 6"
                                                    fill="none">
                                                    <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                </svg> */}
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    {!isBodyClicked &&
                        !isGroundClicked &&
                        !isTyreClicked &&
                        !isHideHotspotsClicked && (
                            <>
                                <div
                                    className="dot-svg2-car-1"
                                    onClick={() => setIsInteriorsClicked(true)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none">
                                        <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14.5"
                                            stroke="#F1FAEE"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    {isInteriorsClicked && (
                                        <>
                                            <div className="body-box interior-position">
                                                Interiors
                                            </div>
                                            <div className="interior-line-svg"></div>
                                        </>
                                    )}
                                </div>
                                {isInteriorsClicked && (
                                    <>
                                        <div className="description-container">
                                            <ul>
                                                <li className="data-list">
                                                    Steering wheel mounted controls
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    Electric power assisted steering system
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    5” (12.7cm) digital instrument panel
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    Synthetic leather seat
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    60/40 split fold rear seat
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    6-way power adjustment - driver seat
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    4-way power adjustment - front passenger seat
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    ISOFIX child restraint anchorage points outer rear
                                                    seats
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="interior-link ms-5 ps-4">
                                            Interiors
                                            <span onClick={OnClickInteriorButton}>
                                                <svg
                                                    width="38"
                                                    height="40"
                                                    viewBox="0 0 38 40"
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
                                                        d="M13 20H27"
                                                        stroke="white"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M20 13L27 20L20 27"
                                                        stroke="white"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    {!isBodyClicked &&
                        !isGroundClicked &&
                        !isInteriorsClicked &&
                        !isHideHotspotsClicked && (
                            <>
                                <div
                                    className="dot-svg3-car-1"
                                    onClick={() => setIsTyreClicked(true)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none">
                                        <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14.5"
                                            stroke="#F1FAEE"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    {isTyreClicked && (
                                        <>
                                            <div className="body-box tyre-position">Tire</div>
                                            <div className="tyre-line-svg"></div>{" "}
                                        </>
                                    )}
                                </div>
                                {isTyreClicked && (
                                    <>
                                        <div className="description-container">
                                            <ul>
                                                <li className="data-list">
                                                    Wheel type
                                                    <span>Alloy</span>
                                                </li>
                                                <li className="data-list">
                                                    Tyre size
                                                    <span>215/55 R18</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    {!isBodyClicked &&
                        !isTyreClicked &&
                        !isInteriorsClicked &&
                        !isHideHotspotsClicked && (
                            <>
                                <div
                                    className="dot-svg4-car-1"
                                    onClick={() => setIsGroundClicked(true)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none">
                                        <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14.5"
                                            stroke="#F1FAEE"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    {isGroundClicked && (
                                        <>
                                            <div className="body-box ground-position">Ground</div>
                                            <div className="ground-line-svg"></div>{" "}
                                        </>
                                    )}
                                </div>
                                {isGroundClicked && (
                                    <>
                                        <div className="description-container">
                                            <ul>
                                                <li className="data-list">
                                                    This nimble SUV is perfect for city driving and navigating tight spaces.
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    Length 4,555 mm .
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    width 1,875 mm
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                                <li className="data-list">
                                                    Height 1,615 mm
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="6"
                                                        viewBox="0 0 5 6"
                                                        fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#D9D9D9" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                </div>
            )}

            {isSecondImageClicked && (
                <div
                    className={`atto3-second-image ${isEngineClicked && "atto3-second-image-engine"
                        }  ${(isUpperExteriorsClicked || isLowerExteriorsClicked) &&
                        "atto3-second-image-exterior"
                        } ${isHideHotspotsClicked && "atto3-hide-hubspot-image"}`}>
                    {!isLowerExteriorsClicked &&
                        !isUpperExteriorsClicked &&
                        !isHideHotspotsClicked && (
                            <>
                                <div
                                    className="dot-svg1-car-2"
                                    onClick={() => setIsEngineClicked(true)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none">
                                        <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14.5"
                                            stroke="#F1FAEE"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    {isEngineClicked && (
                                        <>
                                            <div className="body-box body-position">Bonnet</div>
                                            <div className="body-line-svg"></div>
                                        </>
                                    )}
                                </div>
                                {isEngineClicked && (
                                    <>
                                        <div className="description-text-container">
                                            <span>
                                                The Atto 3 comes with a single electric motor offering 204 horsepower and 310 Nm of torque.
                                                Battery and range: Several battery options are available, with the largest offering a range of up to 420 km (WLTP).
                                            </span>

                                        </div>
                                        <div className="interior-link">
                                            Engine
                                            <span onClick={OnClickEngineButton}>
                                                <svg
                                                    width="38"
                                                    height="40"
                                                    viewBox="0 0 38 40"
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
                                                        d="M13 20H27"
                                                        stroke="white"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M20 13L27 20L20 27"
                                                        stroke="white"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    {!isEngineClicked &&
                        !isLowerExteriorsClicked &&
                        !isHideHotspotsClicked && (
                            <>
                                <div
                                    className="dot-svg2-car-2"
                                    onClick={() => setIsUpperExteriorsClicked(true)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none">
                                        <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14.5"
                                            stroke="#F1FAEE"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    {isUpperExteriorsClicked && (
                                        <>
                                            <div className="body-box body-position">Exteriors</div>
                                            <div className="body-line-svg"></div>
                                        </>
                                    )}
                                </div>
                                {isUpperExteriorsClicked && (
                                    <>
                                        <div className="description-text-container w-75">
                                            <span>
                                                {`The Atto 3 boasts a head-turning design with a sporty stance, sharp lines, and a distinctive grille. The "Dragon Face" theme adds a touch of personality.`}
                                                Optional panoramic sunroof opens up the cabin and creates an airy feel.
                                            </span>

                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    {!isEngineClicked &&
                        !isUpperExteriorsClicked &&
                        !isHideHotspotsClicked && (
                            <>
                                <div
                                    className="dot-svg3-car-2"
                                    onClick={() => setIsLowerExteriorsClicked(true)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none">
                                        <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14.5"
                                            stroke="#F1FAEE"
                                            stroke-width="3"
                                        />
                                    </svg>
                                    {isLowerExteriorsClicked && (
                                        <>
                                            <div className="body-box exterior-position">
                                                Exteriors
                                            </div>
                                            <div className="lower-exterior-line"></div>
                                        </>
                                    )}
                                </div>
                                {isLowerExteriorsClicked && (
                                    <>
                                        <div className="description-text-container w-75">
                                            <span>
                                                BYD Atto 3 Ground Clearance is 175 mm.
                                            </span>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                </div>
            )}
            {isThirdImageClicked && (
                <div
                    className={`atto3-third-image ${(isGetInsideClicked || isTrunkClicked) &&
                        !isHideHotspotsClicked &&
                        "atto3-third-image-left"
                        }`}>
                    {!isGetInsideClicked && !isHideHotspotsClicked && (
                        <>
                            <div
                                className="dot-svg1-car-3"
                                onClick={() => setIsTrunkClicked(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none">
                                    <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                    <circle
                                        cx="16"
                                        cy="16"
                                        r="14.5"
                                        stroke="#F1FAEE"
                                        stroke-width="3"
                                    />
                                </svg>
                                {isTrunkClicked && (
                                    <>
                                        <div className="body-box body-position">Trunk</div>
                                        <div className="body-line-svg"></div>
                                    </>
                                )}
                            </div>
                            {isTrunkClicked && (
                                <>
                                    <div className="description-text-container w-75">
                                        <span>
                                            The BYD Atto 3 has a boot space measuring 440 litres
                                        </span>

                                    </div>
                                    <div className="interior-link ps-5 ms-5">
                                        Trunk
                                        <span onClick={OnClickTrunkButton}>
                                            <svg
                                                width="38"
                                                height="40"
                                                viewBox="0 0 38 40"
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
                                                    d="M13 20H27"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M20 13L27 20L20 27"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                    {!isTrunkClicked && !isHideHotspotsClicked && (
                        <>
                            <div
                                className="dot-svg2-car-3"
                                onClick={() => setIsGetInsideClicked(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none">
                                    <circle cx="16" cy="16" r="4" fill="#F1FAEE" />
                                    <circle
                                        cx="16"
                                        cy="16"
                                        r="14.5"
                                        stroke="#F1FAEE"
                                        stroke-width="3"
                                    />
                                </svg>
                                {isGetInsideClicked && (
                                    <>
                                        <div className="body-box body-position">Get inside</div>
                                        <div className="body-line-svg"></div>
                                    </>
                                )}
                            </div>
                            {isGetInsideClicked && (
                                <>
                                    <div className="description-text-container w-75">
                                        <span>
                                            {`The Atto 3 boasts a head-turning design with a sporty stance, sharp lines, and a distinctive grille. The "Dragon Face" theme adds a touch of personality.`}
                                            Optional panoramic sunroof opens up the cabin and creates an airy feel.
                                        </span>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}

            {isCarSlider && (
                <div className="car-slider">
                    <img
                        src={firstImage}
                        className={isFirstImageClicked && "car-slider-click"}
                        onClick={onFistImageClicked}></img>
                    <img
                        src={secondImage}
                        className={isSecondImageClicked && "car-slider-click"}
                        onClick={onSecondImageClicked}></img>
                    <img
                        src={thirdImage}
                        onClick={onThirdImageClicked}
                        className={isThirdImageClicked && "car-slider-click"}></img>
                </div>
            )}

            {isBackShowroom && (
                <div className="interior-link showroom-atto3-link">
                    Back to showroom
                    <span onClick={OnClickShowroomButton}>
                        <svg
                            width="38"
                            height="40"
                            viewBox="0 0 38 40"
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
                                d="M13 20H27"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 13L27 20L20 27"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Atto3;
