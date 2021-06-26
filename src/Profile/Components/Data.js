import React from "react";
import PropTypes from "prop-types";

const Data = (props) => {
  const getStyle = { background: "#ebebeb", textAlign: "center" };
  const buttonStyle ={backgroundColor:"#ccffcc",padding:"0.5rem"}
  return (
    <div style={getStyle} className="main-container">
      <div>{props.children}</div>
      <div>
        <hr />
        <span>
          <h5>Full Name: {props.fullName}</h5>
        </span>
      </div>
      <div>
        <span>
          <h5>Bio: {props.bio}</h5>
        </span>
      </div>
      <div>
        <span>
          <h5>Profession: {props.profession}</h5>
        </span>
      </div>

      <div>
        <span>
          <div className="button">
            <button style={buttonStyle}onClick={props.handleName}> 
            Click Me !!!
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

// implement Prop-Types

Data.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string.isRequired,
};

// default props
Data.defaultProps = {
  fullName: "Gbenle Hafeez",
  bio: "Learning React Js at GoMyCode",
  profession: "Systems Adminstrator",
};
export default Data;
