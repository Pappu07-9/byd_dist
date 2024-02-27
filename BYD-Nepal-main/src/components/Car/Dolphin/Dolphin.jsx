import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import firstImage from "../../../assets/dolphin-small1.png";
import secondImage from "../../../assets/dolphin-small2.png";
import thirdImage from "../../../assets/dolphin-small3.png";
import fourthImage from "../../../assets/dolphin-small4.png";

const Dolphin = () => {
    const [isFirstImageClicked, setIsFirstImageClicked] = useState(true);
    const [isSecondImageClicked, setIsSecondImageClicked] = useState(false);
    const [isThirdImageClicked, setIsThirdImageClicked] = useState(false);
    const [isFourthImageClicked, setIsFourthImageClicked] = useState(false);
    const [isEngineClicked, setIsEngineClicked] = useState(false);
    const [isFirstInteriorClicked, setIsFirstInteriorClicked] = useState(false);
    const [isSecondInteriorClicked, setIsSecondInteriorClicked] = useState(false);
    const [isThirdInteriorClicked, setIsThirdInteriorClicked] = useState(false);
    const [isHideHotspotsClicked, setIsHideHotspotsClicked] = useState(false);
    const [isExteriorsClicked, setIsExteriorsClicked] = useState(false);
    const [isEngineButtonClicked, setIsEngineButtonClicked] = useState(false);
    const [isFirstInteriorButtonClicked, setIsFirstInteriorButtonClicked] =
        useState(false);
    const [isSecondInteriorButtonClicked, setIsSecondInteriorButtonClicked] =
        useState(false);

    const navigate = useNavigate();

    const OnClickEngineButton = () => {
        setIsEngineButtonClicked(true);
        setIsEngineClicked(false);
    };

    const onClickFirstInteriorButton = () => {
        setIsFirstInteriorButtonClicked(true);
        setIsFirstInteriorClicked(false);
    };

    const onClickSecondInteriorButton = () => {
        setIsSecondInteriorButtonClicked(true);
        setIsSecondInteriorClicked(false);
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
        setIsFourthImageClicked(false);
        closeIconOnClick();
    };

    const onSecondImageClicked = () => {
        setIsFirstImageClicked(false);
        setIsSecondImageClicked(true);
        setIsThirdImageClicked(false);
        setIsFourthImageClicked(false);
        closeIconOnClick();
    };

    const onThirdImageClicked = () => {
        setIsFirstImageClicked(false);
        setIsSecondImageClicked(false);
        setIsThirdImageClicked(true);
        setIsFourthImageClicked(false);
        closeIconOnClick();
    };

    const onFourthImageClicked = () => {
        setIsFirstImageClicked(false);
        setIsSecondImageClicked(false);
        setIsThirdImageClicked(false);
        setIsFourthImageClicked(true);
        closeIconOnClick();
    };

    const closeIconOnClick = () => {
        setIsExteriorsClicked(false);
        setIsEngineClicked(false);
        setIsEngineClicked(false);
        setIsFirstInteriorClicked(false);
        setIsSecondInteriorClicked(false);
        setIsThirdInteriorClicked(false);
        setIsEngineButtonClicked(false);
        setIsFirstInteriorButtonClicked(false);
        setIsSecondInteriorButtonClicked(false);
    };

    const onClickHideHubspots = () => {
        setIsHideHotspotsClicked(true);
        closeIconOnClick();
    };

    const isButtonContainerEnd =
        isExteriorsClicked ||
        isEngineClicked ||
        isSecondImageClicked ||
        isThirdImageClicked ||
        isFourthImageClicked ||
        isHideHotspotsClicked ||
        isEngineButtonClicked;

    const isPerferenceBox =
        !isExteriorsClicked &&
        !isEngineClicked &&
        !isSecondImageClicked &&
        !isFourthImageClicked &&
        !isThirdImageClicked &&
        !isHideHotspotsClicked &&
        !isEngineButtonClicked;

    const isButtonVisible =
        !isExteriorsClicked &&
        !isEngineClicked &&
        !isSecondImageClicked &&
        !isThirdImageClicked &&
        !isFourthImageClicked &&
        !isHideHotspotsClicked &&
        !isEngineButtonClicked;

    const isCloseIcon =
        isExteriorsClicked ||
        isEngineClicked ||
        isEngineClicked ||
        isFirstInteriorClicked ||
        isSecondInteriorClicked ||
        isThirdInteriorClicked ||
        isEngineButtonClicked ||
        isFirstInteriorButtonClicked ||
        isSecondInteriorButtonClicked;

    const isAssistantContainer =
        !isExteriorsClicked &&
        !isEngineClicked &&
        !isThirdImageClicked &&
        !isEngineClicked &&
        !isFirstInteriorClicked &&
        !isHideHotspotsClicked &&
        !isFourthImageClicked &&
        !isEngineButtonClicked &&
        !isSecondImageClicked;

    const isBackShowroom =
        !isEngineClicked &&
        !isSecondInteriorClicked &&
        !isFirstInteriorClicked &&
        (isExteriorsClicked ||
            isEngineButtonClicked ||
            isFirstInteriorButtonClicked ||
            isSecondInteriorButtonClicked ||
            isSecondImageClicked ||
            isThirdImageClicked ||
            isFourthImageClicked);

    const isCarSliderClassName =
        isFourthImageClicked ||
        isExteriorsClicked ||
        isEngineClicked ||
        isHideHotspotsClicked ||
        isSecondImageClicked ||
        isThirdImageClicked;

    const isCarSlider =
        !isEngineButtonClicked &&
        !isFirstInteriorButtonClicked &&
        !isSecondInteriorButtonClicked;

    return (
        <div className="car-showroom-container">
            <div className="byd-text text-white">BYD</div>
            <div className="atto3-text text-white">Dolphin</div>
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
                <span className="text-white">Dolphin</span>
            </div>
            <div className="row">
                <div
                    className={`button-container ${isButtonContainerEnd && "button-container-end"
                        }`}>
                    {isButtonVisible && (
                        <>
                            <a href="./src/assets/dolphin_brochure.pdf" className="button-class">

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
                    className={`dolphin-first-image ${(isExteriorsClicked || isEngineClicked || isHideHotspotsClicked) &&
                        "atto3-image-width"
                        } ${isHideHotspotsClicked && "atto3-hide-hubspot-image"} ${isEngineButtonClicked && "dolphin-engine-image"
                        }`}>
                    {!isEngineClicked && !isHideHotspotsClicked && (
                        <>
                            {!isEngineButtonClicked && (
                                <div
                                    className="dot-svg1-car1-dolphin"
                                    onClick={() => setIsExteriorsClicked(true)}>
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
                                    {isExteriorsClicked && (
                                        <>
                                            <div className="body-box dolphin-exterior-position">
                                                Features
                                            </div>
                                            <div className="dolphin-exterior-line-svg"></div>
                                        </>
                                    )}
                                </div>
                            )}
                            {isExteriorsClicked && (
                                <>
                                    <div className="description-text-container description-width">
                                        <span>
                                            The Dolphin offers optional V2L (Vehicle-to-Load) and V2H (Vehicle-to-Home) capabilities, allowing you to use the battery to power appliances or even your home during emergencies or outages.
                                        </span>
                                        <span>
                                            {`  The Dolphin utilizes BYD's advanced e-Platform 3.0, designed specifically for electric vehicles. This platform prioritizes intelligence, efficiency, safety, and aesthetics.`}
                                        </span>
                                    </div>
                                </>
                            )}
                            {isEngineButtonClicked && (
                                <>
                                    <div className="description-text-container description-width">
                                        <span>
                                            A single electric motor produces 70 kW (around 94 horsepower) of power, offering a zippy and responsive driving experience.
                                            The standard battery pack boasts a capacity of 44.9 kWh, translating to a range of up to 340 km (211 miles) according to the WLTP test cycle.
                                        </span>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                    {!isExteriorsClicked &&
                        !isHideHotspotsClicked &&
                        !isEngineButtonClicked && (
                            <>
                                <div
                                    className="dot-svg2-car1-dolphin "
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
                                            <div className="body-box dolphin-engine-position">
                                                Bonnet
                                            </div>
                                            <div className="dolphin-exterior-line-svg dolphin-engine"></div>
                                        </>
                                    )}
                                </div>
                                {isEngineClicked && (
                                    <>
                                        <div className="description-text-container description-width">
                                            <span>
                                                A single electric motor produces 70 kW (around 94 horsepower) of power, offering a zippy and responsive driving experience.
                                                The standard battery pack boasts a capacity of 44.9 kWh, translating to a range of up to 340 km (211 miles) according to the WLTP test cycle.
                                            </span>

                                        </div>
                                        <div className="interior-link ps-5 ms-5">
                                            Bonnet
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
                </div>
            )}
            {isSecondImageClicked && (
                <div
                    className={`dolphin-second-image ${isFirstInteriorClicked && "atto3-second-image-exterior"
                        } ${isFirstInteriorButtonClicked && "dolphin-first-interior-image"}`}>
                    {!isHideHotspotsClicked && (
                        <>
                            {!isFirstInteriorButtonClicked && (
                                <div
                                    className="dot-svg1-car2-dolphin"
                                    onClick={() => setIsFirstInteriorClicked(true)}>
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
                                    {isFirstInteriorClicked && (
                                        <>
                                            <div className="body-box dolphin-engine-position">
                                                Interiors
                                            </div>
                                            <div className="dolphin-exterior-line-svg dolphin-engine"></div>
                                        </>
                                    )}
                                </div>
                            )}
                            {isFirstInteriorClicked && (
                                <>
                                    <div className="description-text-container description-width">
                                        <span>
                                            The Dolphin features a modern and tech-savvy interior with a large touchscreen infotainment system, digital instrument cluster, and a plethora of connected car features.
                                            Various driver-assistance systems, including lane departure warning, automatic emergency braking, and adaptive cruise control, enhance safety and comfort.
                                            Despite its compact size, the Dolphin offers a surprisingly spacious and comfortable interior for up to five adults.
                                            The rear cargo compartment provides ample space for your daily essentials or weekend getaways, with additional storage compartments throughout the cabin.
                                        </span>
                                    </div>
                                    <div className="interior-link ps-5 ms-5">
                                        Interior
                                        <span onClick={onClickFirstInteriorButton}>
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
                            {isFirstInteriorButtonClicked && (
                                <>
                                    <div className="description-text-container description-width">
                                        <span>
                                            The Dolphin features a modern and tech-savvy interior with a large touchscreen infotainment system, digital instrument cluster, and a plethora of connected car features.
                                            Various driver-assistance systems, including lane departure warning, automatic emergency braking, and adaptive cruise control, enhance safety and comfort.
                                            Despite its compact size, the Dolphin offers a surprisingly spacious and comfortable interior for up to five adults.
                                            The rear cargo compartment provides ample space for your daily essentials or weekend getaways, with additional storage compartments throughout the cabin.
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
                    className={`dolphin-third-image ${isSecondInteriorClicked &&
                        !isHideHotspotsClicked &&
                        "atto3-third-image-left"
                        } ${isHideHotspotsClicked && "atto3-hide-hubspot-image"} ${isSecondInteriorButtonClicked && "dolphin-second-interior-image"
                        }`}>
                    {!isHideHotspotsClicked && (
                        <>
                            {!isSecondInteriorButtonClicked && (
                                <div
                                    className="dot-svg1-car3-dolphin"
                                    onClick={() => setIsSecondInteriorClicked(true)}>
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
                                    {isSecondInteriorClicked && (
                                        <>
                                            <div className="body-box dolphin-exterior-position">
                                                Trunk
                                            </div>
                                            <div className="dolphin-exterior-line-svg"></div>
                                        </>
                                    )}
                                </div>
                            )}
                            {isSecondInteriorClicked && (
                                <>
                                    <div className="description-text-container description-width">
                                        <span>
                                            The trunk can easily store four standard 20-inch
                                            luggage compartments. The seats can be split
                                            60:40 allowing the 345 litre boot to be expanded
                                            to 1,310 litres when both seats are folded flat.
                                        </span>
                                    </div>
                                    <div className="interior-link ps-5 ms-5">
                                        Trunk
                                        <span onClick={onClickSecondInteriorButton}>
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
                            {isSecondInteriorButtonClicked && (
                                <>
                                    <div className="description-text-container description-width">
                                        <span>
                                            The trunk can easily store four standard 20-inch
                                            luggage compartments. The seats can be split
                                            60:40 allowing the 345 litre boot to be expanded
                                            to 1,310 litres when both seats are folded flat.
                                        </span>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
            {isFourthImageClicked && (
                <div
                    className={`dolphin-fourth-image ${isThirdInteriorClicked &&
                        !isHideHotspotsClicked &&
                        "atto3-third-image-left"
                        } ${isHideHotspotsClicked && "atto3-hide-hubspot-image"} `}>
                    {!isHideHotspotsClicked && (
                        <>
                            <div
                                className="dot-svg-car4-dolphin"
                                onClick={() => setIsThirdInteriorClicked(true)}>
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
                                {isThirdInteriorClicked && (
                                    <>
                                        <div className="body-box dolphin-engine-position">
                                            Dimensions
                                        </div>
                                        <div className="dolphin-exterior-line-svg dolphin-engine "></div>
                                    </>
                                )}
                            </div>
                            {isThirdInteriorClicked && (
                                <>
                                    <div className="description-text-container description-width">
                                        <span>
                                            This nimble hatchback is perfect for city driving and navigating tight spaces. Its dimensions are roughly 4,070 mm long, 1,770 mm wide, and 1,570 mm tall. It has ground clearance of 175mm.
                                        </span>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}

            {isCarSlider && (
                <div
                    className={`car-slider ${isCarSliderClassName && "car-slider-center pt-4"
                        }`}>
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
                    <img
                        src={fourthImage}
                        onClick={onFourthImageClicked}
                        className={isFourthImageClicked && "car-slider-click"}></img>
                </div>
            )}

            {isBackShowroom && (
                <div className="interior-link showroom-dolphin-link">
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

export default Dolphin;
