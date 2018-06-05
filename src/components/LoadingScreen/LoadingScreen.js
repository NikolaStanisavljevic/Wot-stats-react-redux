import React from "react";
import "./LoadingScreen.css";
import video from "../../assets/videos/LSVideo.mp4";
import Typist from 'react-typist';

const loadingScreen = (props) => {
    const cursor = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: true,
      };
console.log(props.cliked);
  return (
    <div style={{
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
      <div className='parent'>
        <Typist cursor={cursor}>
          <span className="typed"> Welcome to World of Tanks statistic site..</span>
          <br />
          <Typist.Delay ms={500} />
              Press lets go when you are ready!                      
        </Typist>
        <button className='btn' style={{fontSize: '2rem', padding: ' 1rem 2.5rem'}} onClick={props.clicked}>Lets go!</button>
      </div>
    </div>
  );
};

export default loadingScreen;
