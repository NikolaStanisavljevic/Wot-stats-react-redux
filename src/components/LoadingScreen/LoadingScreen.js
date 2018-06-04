import React from "react";
import "./LoadingScreen.css";
import video from "../../assets/videos/LSVideo.mp4";
import Typist from 'react-typist';

const loadingScreen = () => {
    const cursor = {
        show: true,
        blink: true,
        element: ' |',
        hideWhenDone: true,
      };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}>

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
      <Typist cursor={cursor}>
            <span className="my-custom-class"> Welcome to World of Tanks statistic site.. </span>
            <br />
            <Typist.Delay ms={500} />
                Press lets go when you are ready!                    
            </Typist>
    </div>
  );
};

export default loadingScreen;
