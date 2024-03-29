import { createAction, handleActions } from "redux-actions";

// 액션 타입을 정의해줍니다.
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const RESET = "counter/RESET";

// 액션 생성 함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  number: 0
};

// 리듀서를 만들어서 내보내줍니다.
// export default function reducer(state = initialState, action) {
//   // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
//   // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
//   switch (action.type) {
//     case INCREMENT:
//       return { number: state.number + 1 };
//     case DECREMENT:
//       return { number: state.number - 1 };
//     default:
//       return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
//   }
// }

export default handleActions(
  // 첫번째 파라미터 : 액션을 처리하는 함수들
  {
    [INCREMENT]: ({ number }) => ({ number: number + 1 }),
    [DECREMENT]: ({ number }) => ({ number: number - 1 }),
    [RESET]: ({ number }) => ({ number: 0 })
  },
  // 두번째 파라미터 : 초기 상태
  initialState
);
