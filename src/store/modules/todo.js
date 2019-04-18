import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const CHANGE_INPUT = "todo/CHANGE_INPUT";
const INSERT = "todo/INSERT";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; // todo item에 들어갈 고유 값

const initialState = Map({
  input: "",
  todos: List()
});

/**
 * 객체는 Map
 * 배열은 List
 * 설정할땐 set
 * 읽을땐 get
 * 읽은다음에 설정 할 땐 update
 * 내부에 있는걸 ~ 할땐 뒤에 In 을 붙인다: setIn, getIn, updateIn
 * 일반 자바스크립트 객체로 변환 할 땐 toJS
 * List 엔 배열 내장함수와 비슷한 함수들이 있다 – push, slice, filter, sort, concat… 전부 불변함을 유지함
 * 특정 key 를 지울때 (혹은 List 에서 원소를 지울 때) delete 사용
 */
export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => state.set("input", action.payload),
    [INSERT]: (state, { payload: text }) => {
      const item = Map({ id: id++, checked: false, text });
      return state.update("todos", todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
      const index = state.get("todos").findIndex(item => item.get("id") === id);
      return state.updateIn(["todos", index, "checked"], checked => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
      const index = state.get("todos").findIndex(item => item.get("id") === id);
      return state.deleteIn(["todos", index]);
    }
  },
  initialState
);
