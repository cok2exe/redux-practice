import React, { Component } from "react";
import AppTemplate from "./AppTemplate";
import CounterContainer from "../containers/CounterContainer";
import TodoContainer from "../containers/TodoContainer";

export default class App extends Component {
  render() {
    return (
      <div className="section-app">
        <h1>Redux 공부하기</h1>
        <AppTemplate counter={<CounterContainer />} todos={<TodoContainer />} />
      </div>
    );
  }
}
