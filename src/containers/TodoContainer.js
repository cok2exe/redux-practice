import React, { Component } from "react";
import { connect } from "react-redux";
import { TodoActions } from "../store/actionCreators";

import Todos from "../components/Todos";

class TodosContainer extends Component {
  handleChange = e => {
    TodoActions.changeInput(e.target.value);
  };

  handleInsert = () => {
    const { input } = this.props;
    if (input.length > 0) {
      TodoActions.insert(input); // 추가하고
      TodoActions.changeInput(""); // 기존 인풋값 비우기
    } else {
      console.warn("빈 값은 추가할 수 없어요!");
    }
  };

  handleToggle = id => {
    TodoActions.toggle(id);
  };

  handleRemove = id => {
    TodoActions.remove(id);
  };

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(({ todo }) => ({
  input: todo.get("input"),
  todos: todo.get("todos")
}))(TodosContainer);
