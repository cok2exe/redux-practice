// 아직 실험적인 방법
import { bindActionCreators } from "redux";
import * as counterActions from "./modules/counter";
import * as todoActions from "./modules/todo";

import store from "./index";

const { dispatch } = store;

export const CounterActions = bindActionCreators(counterActions, dispatch);
export const TodoActions = bindActionCreators(todoActions, dispatch);
