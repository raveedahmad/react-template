import React from "react";

import "./ImgWithTextOver.css";

const ImgWithTextOver = props => {
  const background = require("../../images/download1.jpg");
  return (
    <div
      id="img-with-text-over"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h4 id="text-on-image">Photography is a trend in today's World</h4>
    </div>
  );
};

export default ImgWithTextOver;
