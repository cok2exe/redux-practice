import React, { Fragment } from "react";

const Counter = ({ number, onIncrement, onDecrement, onReset }) => {
  return (
    <Fragment>
      <h2>{number}</h2>
      <button onClick={onIncrement}>증가 (+)</button>
      <button onClick={onDecrement}>감소 (-)</button>
      <button onClick={onReset}>초기화</button>
    </Fragment>
  );
};

Counter.defaultProps = {
  number: 0
};

export default Counter;
