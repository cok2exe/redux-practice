import React from "react";

const AppTemplate = ({ counter, todos }) => {
  return (
    <div className="app-template">
      <div className="counter">{counter}</div>
      <div className="todos">{todos}</div>
    </div>
  );
};

export default AppTemplate;
