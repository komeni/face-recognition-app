import React from "react";

const ImageRec = ({ imageUrl }) => {
  return (
    <div className="br5 pa4 center w-60 linear mt3 br4 grow">
      <img className="br5" src={imageUrl} alt="" />
    </div>
  );
};

export default ImageRec;
