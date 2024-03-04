import { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

const ListOfServices = () => {
    const navigate = useNavigate();

    const [showProduct, setShowProduct] = useState(false);

    const name = localStorage.getItem("userName");

    const words1 = `Hello ${name}, Welcome to Virtual Showroom Experience!`;
    const words2 = "How can I assist you today?";

    const wordArray1 = words1.split(" ");
    const wordArray2 = words2.split(" ");

    function textAnimation() {
        const textHolder = $(".text-holder");
        textHolder.empty();

        for (let i = 0; i < wordArray1.length; i++) {
            const currentWord = wordArray1[i];
            const isVirtualShowroomExperience =
                currentWord === "Virtual" ||
                currentWord === "Showroom" ||
                currentWord === "Experience!";

            const spanClass = isVirtualShowroomExperience
                ? "current-word showroom-text-color"
                : "current-word";

            textHolder.append(
                "<span class='" + spanClass + "'>" + currentWord + "</span>" + " "
            );

            $(".current-word")
                .eq(i)
                .css("animation-delay", "" + i / 5 + "s");
        }

        setTimeout(() => {
            textHolder.empty();

            for (let i = 0; i < wordArray2.length; i++) {
                const currentWord = wordArray2[i];
                textHolder.append(
                    "<span class='current-word'>" + currentWord + "</span>" + " "
                );

                $(".current-word")
                    .eq(i)
                    .css("animation-delay", "" + i / 10 + "s");
            }
        }, 5000);

        setTimeout(() => {
            setShowProduct(true);
        }, 1000);
    }

    useEffect(() => {
        textAnimation();
    }, []);

    const viewProductOnClick = () => {
        navigate("/products");
    };

    const chargingOnClick = () => {
        navigate("/charging-station");
    };

    return (
        <div className="container">
            <div className="inside-byd">
                <div className="text-container">
                    <div className="text-holder"></div>
                </div>
                <div className="assistant-container">
                    <div className="assistant-image"></div>
                    <div className="assistant-box">
                        <div className="text-content">
                            <div className="text-white nasso-text">NASSO</div>
                            <div className="assistant-text">Assistant.</div>
                        </div>
                        <div className="assistant-box-text">Talk with our assistant</div>
                    </div>
                </div>
                <div className="filter-container"> </div>
                {showProduct ? (
                    <div className="product-container row col-4">
                        <div className="view-products" onClick={viewProductOnClick}>
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M6 12H32L38 20H42C44.22 20 46 21.78 46 24V30H42C42 31.5913 41.3679 33.1174 40.2426 34.2426C39.1174 35.3679 37.5913 36 36 36C34.4087 36 32.8826 35.3679 31.7574 34.2426C30.6321 33.1174 30 31.5913 30 30H18C18 31.5913 17.3679 33.1174 16.2426 34.2426C15.1174 35.3679 13.5913 36 12 36C10.4087 36 8.88258 35.3679 7.75736 34.2426C6.63214 33.1174 6 31.5913 6 30H2V16C2 13.78 3.78 12 6 12ZM5 15V20H21V15H5ZM24 15V20H34.28L30.5 15H24ZM12 27C11.2044 27 10.4413 27.3161 9.87868 27.8787C9.31607 28.4413 9 29.2044 9 30C9 30.7956 9.31607 31.5587 9.87868 32.1213C10.4413 32.6839 11.2044 33 12 33C12.7956 33 13.5587 32.6839 14.1213 32.1213C14.6839 31.5587 15 30.7956 15 30C15 29.2044 14.6839 28.4413 14.1213 27.8787C13.5587 27.3161 12.7956 27 12 27ZM36 27C35.2043 27 34.4413 27.3161 33.8787 27.8787C33.3161 28.4413 33 29.2044 33 30C33 30.7956 33.3161 31.5587 33.8787 32.1213C34.4413 32.6839 35.2043 33 36 33C36.7957 33 37.5587 32.6839 38.1213 32.1213C38.6839 31.5587 39 30.7956 39 30C39 29.2044 38.6839 28.4413 38.1213 27.8787C37.5587 27.3161 36.7957 27 36 27Z"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </div>
                            <div className="view-product-text ">View products</div>
                        </div>
                        <div className="view-products">
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M41.92 32.9C41.94 32.6 42 32.3 42 32V33L41.92 32.9ZM22 32C22 33.42 22.3 34.78 22.84 36H12V38C12 39.1 11.1 40 10 40H8C6.9 40 6 39.1 6 38V22L10.16 10C10.56 8.84 11.68 8 13 8H35C36.32 8 37.44 8.84 37.84 10L42 22V32C42 26.48 37.52 22 32 22C26.48 22 22 26.48 22 32ZM16 27C16 25.34 14.66 24 13 24C11.34 24 10 25.34 10 27C10 28.66 11.34 30 13 30C14.66 30 16 28.66 16 27ZM38 20L35 11H13L10 20H38ZM45.74 42.38L37.52 34.16C38.34 32.08 37.88 29.64 36.16 27.94C34.36 26.12 31.66 25.76 29.48 26.76L33.36 30.64L30.66 33.36L26.68 29.46C25.6 31.64 26.1 34.34 27.86 36.16C28.6543 36.9703 29.6681 37.5307 30.7768 37.7724C31.8854 38.014 33.0405 37.9263 34.1 37.52L42.32 45.72C42.68 46.1 43.22 46.1 43.58 45.72L45.66 43.66C46.1 43.3 46.1 42.66 45.74 42.38Z"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </div>
                            <div className="view-product-text ">Service station</div>
                        </div>
                        <div className="view-products" onClick={chargingOnClick}>
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M37.84 4.02C37.44 2.84 36.32 2 35 2H13C11.68 2 10.58 2.84 10.16 4.02L6.22 15.36C6.08 15.78 6 16.22 6 16.68V31C6 32.66 7.34 34 9 34C10.66 34 12 32.66 12 31V30H36V31C36 32.64 37.34 34 39 34C40.64 34 42 32.66 42 31V16.68C42 16.24 41.92 15.78 41.78 15.36L37.84 4.02ZM13 24C11.34 24 10 22.66 10 21C10 19.34 11.34 18 13 18C14.66 18 16 19.34 16 21C16 22.66 14.66 24 13 24ZM35 24C33.34 24 32 22.66 32 21C32 19.34 33.34 18 35 18C36.66 18 38 19.34 38 21C38 22.66 36.66 24 35 24ZM10 14L12.54 6.36C12.82 5.56 13.58 5 14.44 5H33.56C34.42 5 35.18 5.56 35.46 6.36L38 14H10ZM14 40H22V36L34 42H26V46L14 40Z"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </div>
                            <div className="view-product-text ">Charging</div>
                        </div>
                        <div className="view-products">
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M42 18L34 10V16H20V20H34V26M14 22L6 30L14 38V32H28V28H14V22Z"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </div>
                            <div className="view-product-text ">Exchange & valuation</div>
                        </div>
                        <div className="view-products">
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M12 33L6 38.88V22H12M22 29.32L18.86 26.64L16 29.28V14H22M32 26L26 32V6H32M37.62 25.62L34 22H44V32L40.42 28.42L26 42.72L19.06 36.68L11.5 44H6L18.94 31.32L26 37.28"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </div>
                            <div className="view-product-text ">Financing</div>
                        </div>
                        <div className="view-products" onClick={() => {
                            navigate("/cost-saving");
                        }}>
                            <div className="view-products-svg">
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="grommet-icons:money">
                                        <path id="Vector" d="M25.3334 25.8337C25.3334 24.0841 20.3712 22.667 14.25 22.667M25.3334 25.8337C25.3334 27.5832 20.3712 29.0003 14.25 29.0003C8.12887 29.0003 3.16671 27.5832 3.16671 25.8337M25.3334 25.8337V33.6506C25.3334 35.454 20.3712 36.917 14.25 36.917C8.12887 36.917 3.16671 35.4556 3.16671 33.6506V25.8337M25.3334 25.8337C31.388 25.8337 36.4167 24.2709 36.4167 22.667V6.83366M14.25 22.667C8.12887 22.667 3.16671 24.0841 3.16671 25.8337M14.25 22.667C7.25487 22.667 1.58337 21.1042 1.58337 19.5003V11.5837M14.25 8.41699C7.25487 8.41699 1.58337 9.83408 1.58337 11.5837M1.58337 11.5837C1.58337 13.3332 7.25487 14.7503 14.25 14.7503C14.25 16.3542 19.4006 17.917 25.4553 17.917C31.5084 17.917 36.4167 16.3542 36.4167 14.7503M36.4167 6.83366C36.4167 5.08408 31.5084 3.66699 25.4553 3.66699C19.4006 3.66699 14.4939 5.08408 14.4939 6.83366M36.4167 6.83366C36.4167 8.58324 31.5084 10.0003 25.4553 10.0003C19.4022 10.0003 14.4939 8.58324 14.4939 6.83366M14.4939 6.83366V22.9298" stroke="white" />
                                    </g>
                                </svg>

                            </div>
                            <div className="view-product-text ">Cost-saving</div>
                        </div>
                        {/* <NavLink to="/test-drive" className="view-products">
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M37.84 10.02C37.44 8.84 36.32 8 35 8H13C11.68 8 10.58 8.84 10.16 10.02L6 22V38C6 39.1 6.9 40 8 40H10C11.1 40 12 39.1 12 38V36H36V38C36 39.1 36.9 40 38 40H40C41.1 40 42 39.1 42 38V22L37.84 10.02ZM13 30C11.34 30 10 28.66 10 27C10 25.34 11.34 24 13 24C14.66 24 16 25.34 16 27C16 28.66 14.66 30 13 30ZM35 30C33.34 30 32 28.66 32 27C32 25.34 33.34 24 35 24C36.66 24 38 25.34 38 27C38 28.66 36.66 30 35 30ZM10 20L13 11H35L38 20H10Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>

                            <div className="view-product-text ">Test drive</div>
                        </NavLink> */}
                        {/* </div> */}
                        <div className="view-products">
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M18 10C20.1217 10 22.1566 10.8429 23.6569 12.3431C25.1571 13.8434 26 15.8783 26 18C26 20.1217 25.1571 22.1566 23.6569 23.6569C22.1566 25.1571 20.1217 26 18 26C15.8783 26 13.8434 25.1571 12.3431 23.6569C10.8429 22.1566 10 20.1217 10 18C10 15.8783 10.8429 13.8434 12.3431 12.3431C13.8434 10.8429 15.8783 10 18 10ZM18 30C23.34 30 34 32.68 34 38V42H2V38C2 32.68 12.66 30 18 30ZM33.52 10.72C37.56 15.12 37.56 21.22 33.52 25.26L30.16 21.88C31.84 19.52 31.84 16.46 30.16 14.1L33.52 10.72ZM40.14 4C48 12.1 47.94 24.22 40.14 32L36.88 28.74C42.42 22.38 42.42 13.3 36.88 7.26L40.14 4Z"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </div>
                            <div className="view-product-text ">Talk to NASSO</div>
                        </div>
                        <div className="view-products">
                            <div className="view-products-svg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none">
                                    <path
                                        d="M39.9 42C35.7333 42 31.6167 41.0913 27.55 39.274C23.4833 37.4567 19.7833 34.882 16.45 31.55C13.1167 28.2167 10.542 24.5167 8.726 20.45C6.91 16.3833 6.00133 12.2667 6 8.1C6 7.5 6.2 7 6.6 6.6C7 6.2 7.5 6 8.1 6H16.2C16.6667 6 17.0833 6.15867 17.45 6.476C17.8167 6.79333 18.0333 7.168 18.1 7.6L19.4 14.6C19.4667 15.1333 19.45 15.5833 19.35 15.95C19.25 16.3167 19.0667 16.6333 18.8 16.9L13.95 21.8C14.6167 23.0333 15.408 24.2247 16.324 25.374C17.24 26.5233 18.2487 27.632 19.35 28.7C20.3833 29.7333 21.4667 30.692 22.6 31.576C23.7333 32.46 24.9333 33.268 26.2 34L30.9 29.3C31.2 29 31.592 28.7747 32.076 28.624C32.56 28.4733 33.0347 28.432 33.5 28.5L40.4 29.9C40.8667 30.0333 41.25 30.2753 41.55 30.626C41.85 30.9767 42 31.368 42 31.8V39.9C42 40.5 41.8 41 41.4 41.4C41 41.8 40.5 42 39.9 42Z"
                                        fill="#F1FAEE"
                                    />
                                </svg>
                            </div>
                            <div className="view-product-text ">Showroom assistant</div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div >
    );
};

export default ListOfServices;
