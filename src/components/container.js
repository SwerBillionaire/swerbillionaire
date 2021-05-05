import React from "react";

const Container = (props) => {
  return <div className="container mx-auto p-4">{props.children}</div>;
};

export default Container;
