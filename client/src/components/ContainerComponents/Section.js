// React
import React from "react";


const Section = (props) => {

  const section_styles = {
    height: "84vh",
    width: "33%",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "20px",
    // marginLeft: "10px",
    marginBottom: "10px",
    padding: "15px",

  }

  return (
    <div style={{ ...section_styles, ...props.styles }} className={props.class}>
      {props.children}
    </div>
  );
}

export default Section;
