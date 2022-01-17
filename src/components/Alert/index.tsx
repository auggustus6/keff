import React from "react";
import * as Styles from "./styles";
const AlertTemplate = ({ style, options, message, close }: any) => {
  const buttonStyle = {
    marginLeft: "20px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "#FFFFFF",
  };

  return (
    <Styles.Wrapper type={options.type} style={{ ...style }}>
      {message}
      <button onClick={close} style={buttonStyle}>
        X
      </button>
    </Styles.Wrapper>
  );
};

export default AlertTemplate;
