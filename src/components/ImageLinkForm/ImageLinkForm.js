import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = (props) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="container">
        <div className="form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70"
            type="text"
            onChange={props.onInputChange}
          />
          <button
            onClick={props.onPictureDetect}
            className="grow f4 link ph3 pv2 dib white bg-light-purple w-30"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
