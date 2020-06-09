// React
import React from "react";


const Title = (props) => {

  const title_styles = {
    marginTop: "0px"
  }

  return (
    <div className="title">
      <h2 style={{ ...props.styles, ...title_styles }}>{props.children}</h2>
    </div >
  );
}

export default Title;
