import React from "react";
import "./ImageForm.css";

const ImageForm = ({ onChangeInput, onClick }) => {
  return (
    <div>
      <p className="f3 tc mt5">
        {"This magic brain would detect faces in your images. Give it a try!"}
      </p>
      <div className="pa4 center shadow-3 w-60 linear mt5 br4">
        <input
          className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
          placeholder="Your Url Here"
          type="text"
          onChange={onChangeInput}
        />
        <button
          className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
          onClick={onClick}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageForm;
