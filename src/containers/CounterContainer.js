import React, { Component } from "react";
import { connect } from "react-redux";

import { CounterActions } from "../store/actionCreators";

import Counter from "../components/Counter";

class CounterContainer extends Component {
  handleIncrement = () => {
    CounterActions.increment();
  };

  handleDecrement = () => {
    CounterActions.decrement();
  };

  handleReset = () => {
    CounterActions.reset();
  };

  render() {
    const { handleIncrement, handleDecrement, handleReset } = this;
    const { number } = this.props;

    return (
      <Counter
        number={number}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
    );
  }
}

// 함수를 connect 내부에서 정의하면 코드가 조금 더 깔끔해집니다.
/**
 * 지금 dispatch 를 보면 각 액션 함수마다 일일히 dispatch(actionCreator())
 * 형식으로 작성해야 된다는점이 조금 귀찮습니다.
 * 이 부분은, redux 의 bindActionCreators 함수를 사용하면 더 간소화 할 수 있습니다.
 */
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch => ({
//     increment: () => dispatch(counterActions, increment()),
//     decrement: () => dispatch(counterActions.decrement())
//   })
// )(CounterContainer);

// bindActionCreators 사용
export default connect(state => ({
  number: state.counter.number
}))(CounterContainer);
