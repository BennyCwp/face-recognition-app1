import React from "react";
import "./FaceImage.css";

const FaceImage = ({ imageUrl, faceBox }) => {
  return (
    <div className="ma1 container">
      <div className="relative mt2">
        <img
          className="faceImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: faceBox.topRow,
            right: faceBox.rightCol,
            bottom: faceBox.bottomRow,
            left: faceBox.leftCol,
          }}
        />
      </div>
    </div>
  );
};

export default FaceImage;
