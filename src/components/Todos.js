import React from "react";
import { List, Map } from "immutable";

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => (
  <li
    style={{
      textDecoration: checked ? "line-through" : "none"
    }}
    onClick={() => onToggle(id)}
    onDoubleClick={() => onRemove(id)}
  >
    {text}
  </li>
);

/**
 * props 로 받아온 todos 는 Immutable List 형태입니다.
 * Immutable List 는 완전한 배열은 아니지만,
 * 리액트에서 호환이 되기 때문에 map 함수를 사용하여 컴포넌트 List 를 렌더링 했을 때
 * 오류 없이 렌더링 할 수 있습니다.
 * 추가적으로, List 안에 들어있는 것들은 Map 이므로,
 * 내부 아이템들을 조회 할 때에는 .get() 을 사용하거나,
 * .toJS() 를 통하여 일반 객체로 변환 후 사용해주어야 합니다.
 */
const Todos = ({ todos, input, onInsert, onToggle, onRemove, onChange }) => {
  const todoItems = todos.map(todo => {
    const { id, checked, text } = todo.toJS();
    return (
      <TodoItem
        id={id}
        checked={checked}
        text={text}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    );
  });
  return (
    <div>
      <h2>오늘 할 일</h2>
      <input value={input} onChange={onChange} />
      <button onClick={onInsert}>추가</button>
      <ul>{todoItems}</ul>
    </div>
  );
};

Todos.defaultProps = {
  todos: List([
    Map({
      id: 0,
      text: "Redux/Mobx는 왜 사용할까?",
      checked: false
    }),
    Map({
      id: 1,
      text: "코딩하기",
      checked: true
    })
  ]),
  input: ""
};

export default Todos;
