import React from "react";
import "./LoadingScreen.css";
import video from "../../assets/videos/LSVideo.mp4";

const loadingScreen = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <video
        src={video}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%"
        }}
        autoPlay="true"
        muted="true"
        loop="true"
      />
    </div>
  );
};

export default loadingScreen;
