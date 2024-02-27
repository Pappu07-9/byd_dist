import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

import { provinceData } from "../nepal-province";
import { province1 } from "../province1-district";
import { province2 } from "../province2-district";
import { province3 } from "../province3-district";
import { province4 } from "../province4-district";
import { province5 } from "../province5-district";
import { province6 } from "../province6-district";
import { province7 } from "../province7-district";

const NepalMap = () => {
    const navigate = useNavigate();

    var provinceMap, provinceGeoJson, stateGeoJson;

    const [hoverData, setHoverData] = useState(false);

    const [provinceListData, setProvinceListData] = useState();

    const [isMouseOverTrue, setIsMouseOverTrue] = useState(false);

    const [isShowroomIcon, setIsShowroomIcon] = useState(false);

    const onClickShowroomImage = () => {
        navigate("/welcome");
    };

    useEffect(() => {
        provinceMap = L.map("map", {
            scrollWheelZoom: true,
            touchZoom: true,
            doubleClickZoom: true,
            zoomControl: true,
            dragging: true,
        }).setView([28.3949, 84.124], 8);

        provinceGeoJson = L.geoJson(provinceData, {
            style: style,
            onEachFeature: onEachFeature,
        }).addTo(provinceMap);

        var bound = provinceGeoJson.getBounds();
        provinceMap.fitBounds(bound);

        function style(feature) {
            return {
                weight: 2,
                opacity: 1,
                color: "#FFF",
                dashArray: "1",
                fillOpacity: "inherit",
                fillColor: getProvinceColor(feature.properties.Province),
            };
        }

        function highlightFeature(e) {
            var layer = e.target;
            setHoverData(true);

            layer.setStyle({
                weight: 2,
                color: "white",
                dashArray: "",
                fillOpacity: "inherit",
                fillColor: "#1D3557",
            });

            setProvinceListData(e.target.feature.properties.Province);

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        }

        function getProvinceColor(province) {
            switch (province) {
                case 1:
                    return "#116AB0";
                    break;
                case 2:
                    return "#116AB0";
                    break;
                case 3:
                    return "#116AB0";
                    break;
                case 4:
                    return "#116AB0";
                    break;
                case 5:
                    return "#116AB0";
                    break;
                case 6:
                    return "#116AB0";
                    break;
                case 7:
                    return "#116AB0";
                    break;
                default:
                    return "#116AB0";
                    break;
            }
        }

        function resetHighlight(e) {
            provinceGeoJson.resetStyle(e.target);
            setHoverData(false);
        }

        function zoomToProvince(e) {
            var json,
                province_number = e.target.feature.properties.Province;

            provinceMap.fitBounds(e.target.getBounds());
            setHoverData(true);

            if (stateGeoJson != undefined) {
                stateGeoJson.clearLayers();
            }

            switch (province_number) {
                case 1:
                    json = province1;
                    break;
                case 2:
                    json = province2;
                    break;
                case 3:
                    json = province3;
                    break;
                case 4:
                    json = province4;
                    break;
                case 5:
                    json = province5;
                    break;
                case 6:
                    json = province6;
                    break;
                case 7:
                    json = province7;
                    break;
                default:
                    json = "";
                    break;
            }

            var layer = e.target;

            setIsShowroomIcon(layer.feature.properties.STATE_CODE === 3 && true);

            if (layer.feature.properties.STATE_CODE !== 3) return null;

            stateGeoJson = L.geoJson(
                json,

                {
                    style: function (feature) {
                        return {
                            color: "#1D3557",
                            dashArray: "",
                            fillOpacity: "inherit",
                            fillColor: "#1D3557",
                        };
                    },
                }
            );

            stateGeoJson.addTo(provinceMap);
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToProvince,
            });
        }

        return () => {
            provinceMap.remove();
            setIsShowroomIcon(false);
        };
    }, []);

    function getProvinceData(province) {
        switch (province) {
            case 1:
                return "Koshi";
                break;
            case 2:
                return "Madhesh";
                break;
            case 3:
                return "Bagmati";
                break;
            case 4:
                return "Gandaki";
                break;
            case 5:
                return "Lumbini";
                break;
            case 6:
                return "Karnali";
                break;
            case 7:
                return "Sudurpashchim";
                break;
            default:
                return "";
                break;
        }
    }

    return (
        <div className="mapBackground">
            <div id="map"></div>
            {hoverData ? (
                <table className="table hover-data w-auto">
                    <thead>
                        <tr>
                            <th scope="col">Name of Province</th>
                            <th scope="col">
                                {provinceListData === 3 && "List of BYD showroom location"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{getProvinceData(provinceListData)}</th>
                            <td>{provinceListData === 3 && "Narayanchaur, Naxal"}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                ""
            )}

            {isShowroomIcon ? (
                <div
                    className="showroom-icon"
                    onMouseOver={() => setIsMouseOverTrue(true)}>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="19.5"
                            fill="white"
                        />
                        <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="19.5"
                            stroke="#DFDFDF"
                        />
                        <path
                            d="M16.6663 19.1666L17.9163 15.4166H25.4163L26.6663 19.1666M25.4163 23.3333C25.0848 23.3333 24.7669 23.2016 24.5325 22.9672C24.298 22.7328 24.1663 22.4148 24.1663 22.0833C24.1663 21.7518 24.298 21.4338 24.5325 21.1994C24.7669 20.965 25.0848 20.8333 25.4163 20.8333C25.7479 20.8333 26.0658 20.965 26.3002 21.1994C26.5346 21.4338 26.6663 21.7518 26.6663 22.0833C26.6663 22.4148 26.5346 22.7328 26.3002 22.9672C26.0658 23.2016 25.7479 23.3333 25.4163 23.3333ZM17.9163 23.3333C17.5848 23.3333 17.2669 23.2016 17.0325 22.9672C16.798 22.7328 16.6663 22.4148 16.6663 22.0833C16.6663 21.7518 16.798 21.4338 17.0325 21.1994C17.2669 20.965 17.5848 20.8333 17.9163 20.8333C18.2479 20.8333 18.5658 20.965 18.8002 21.1994C19.0346 21.4338 19.1663 21.7518 19.1663 22.0833C19.1663 22.4148 19.0346 22.7328 18.8002 22.9672C18.5658 23.2016 18.2479 23.3333 17.9163 23.3333ZM26.5997 15C26.4247 14.5 25.9497 14.1666 25.4163 14.1666H17.9163C17.383 14.1666 16.908 14.5 16.733 15L14.9997 20V26.6666C14.9997 26.8876 15.0875 27.0996 15.2438 27.2559C15.4 27.4122 15.612 27.5 15.833 27.5H16.6663C16.8874 27.5 17.0993 27.4122 17.2556 27.2559C17.4119 27.0996 17.4997 26.8876 17.4997 26.6666V25.8333H25.833V26.6666C25.833 26.8876 25.9208 27.0996 26.0771 27.2559C26.2334 27.4122 26.4453 27.5 26.6663 27.5H27.4997C27.7207 27.5 27.9326 27.4122 28.0889 27.2559C28.2452 27.0996 28.333 26.8876 28.333 26.6666V20L26.5997 15ZM22.433 12.5C22.258 12 21.783 11.6666 21.2497 11.6666H13.7497C13.2163 11.6666 12.7413 12 12.5663 12.5L10.833 17.5V24.1666C10.833 24.3876 10.9208 24.5996 11.0771 24.7559C11.2334 24.9122 11.4453 25 11.6663 25H12.4997C12.7207 25 12.9326 24.9122 13.0889 24.7559C13.2452 24.5996 13.333 24.3876 13.333 24.1666V20.7583C13.1792 20.7031 13.0377 20.6182 12.9168 20.5083C12.7958 20.3984 12.6977 20.2658 12.6281 20.1179C12.5584 19.9701 12.5186 19.81 12.5108 19.6468C12.5031 19.4835 12.5276 19.3204 12.583 19.1666C12.7663 18.6666 13.2247 18.3333 13.7497 18.3333H13.808L14.3913 16.6666H12.4997L13.7497 12.9166H22.5747L22.433 12.5Z"
                            fill="#E63946"
                        />
                    </svg>
                </div>
            ) : (
                ""
            )}

            {isMouseOverTrue ? (
                <div
                    className="showroom-image-icon"
                    onClick={onClickShowroomImage}></div>
            ) : (
                ""
            )}

            <a href="/" className="refresh-button">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_982_285)">
                        <path
                            d="M29.1665 13.3334V18.3334H24.1665"
                            stroke="#171717"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10.8335 26.6666V21.6666H15.8335"
                            stroke="#171717"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.9252 17.5C13.3478 16.3056 14.0661 15.2378 15.0131 14.3962C15.96 13.5545 17.1047 12.9665 18.3404 12.6869C19.5761 12.4073 20.8625 12.4453 22.0795 12.7973C23.2965 13.1493 24.4045 13.8039 25.3002 14.7L29.1668 18.3333M10.8335 21.6666L14.7002 25.3C15.5958 26.1961 16.7038 26.8506 17.9208 27.2027C19.1379 27.5547 20.4242 27.5927 21.6599 27.3131C22.8956 27.0335 24.0403 26.4455 24.9873 25.6038C25.9342 24.7621 26.6525 23.6943 27.0752 22.5"
                            stroke="#171717"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_982_285">
                            <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(10 10)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </div>
    );
};

export default NepalMap;
