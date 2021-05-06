// 액션 타입 정의
const ADD_HISTORY = "history/ADD";

// 액션 생성 함수 정의
export const add_history = () => ({ type: ADD_HISTORY });

// 초기 상태 정의
const initialState = {
  history: [],
};

// 리듀서 정의
export default function history(state = initialState, action) {
  switch (action.type) {
    case ADD_HISTORY:
      return;
    default:
      return state;
  }
}
