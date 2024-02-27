import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Interiors = () => {
  const [isSeatClicked, setIsSeatClicked] = useState(false);
  const [isHideHotspotsClicked, setIsHideHotspotsClicked] = useState(false);

  const navigate = useNavigate();

  const OnClickDoorButton = () => {
    navigate("/atto3");
  };

  const OnClickShowroomButton = () => {
    navigate("/services");
  };

  const onClickHideHubspots = () => {
    setIsHideHotspotsClicked(true);
  };

  return (
    <div className="car-showroom-container">
      <div className="byd-text text-white">BYD</div>
      <div className="atto3-text text-white">Atto3</div>
      <div className="interior-link atto3-top-nav">
        <span onClick={OnClickDoorButton}>
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
        <div className="button-container button-container-end">
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
          <button className="  mode-button">
            <span className="text-black bg-white p-2">2d</span>
            <span className="text-white p-2">3d</span>
          </button>
        </div>
      </div>
      {!isSeatClicked ? (
        <div
          className="atto3-interior-image
          ">
          {!isHideHotspotsClicked && (
            <div
              className="dot-svg3-car-1"
              onClick={() => setIsSeatClicked(true)}>
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
            </div>
          )}
        </div>
      ) : (
        <div
          className="atto3-seat-image
          ">
          {!isHideHotspotsClicked && (
            <div className="dot-seat-svg" onClick={OnClickDoorButton}>
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
            </div>
          )}
        </div>
      )}
      <div className="interior-link showroom-link">
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
    </div>
  );
};

export default Interiors;
