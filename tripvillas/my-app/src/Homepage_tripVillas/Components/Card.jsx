import React from "react";

const cardStyles = {
  padding: "24px",
//   width: "auto",
  boxShadow: "0 0 5px 2px lightgray",
};
const Card = ({children,width="auto"}) => {
  return <div style={cardStyles} width={width}>{children}</div>;
};

export default Card;
