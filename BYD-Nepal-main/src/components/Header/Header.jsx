import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { video } from "../../constants";
import "./Header.css";

const col = {
  fontSize: "30px",
  fontWeight: "800",
  fontFamily: "Barlow",
};

const Header = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={video}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={0} />
          )}
        </div>
        <div className="text" style={col}>
          <h1>
            Welcome to the Virtual <br />
            Showroom Experience
          </h1>
          <div className="btn">
            <button class="custom-button" style={{ fontSize: "18px" }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
