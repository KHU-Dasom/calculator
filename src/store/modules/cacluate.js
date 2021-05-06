// 액션 타입 정의
const SET_NUMBER = "calculate/SETNUMBER";
const ADD_HISTORY = "history/ADD";

// 액션 생성 함수 정의
export const setNumber = (number) => ({ type: SET_NUMBER, number });
export const addHistory = () => ({ type: ADD_HISTORY });

// 초기 상태 정의
const initialState = {
  first: 0,
  second: 0,
  operator: "",
  history: [],
};

// 리듀서 정의
export default function calculate(state = initialState, action) {
  switch (action.type) {
    case SET_NUMBER:
      return state.operator === ""
        ? {
            ...state,
            first: state.first * 10 + action.number,
          }
        : {
            ...state,
            second: state.secode * 10 + action.number,
          };
    case ADD_HISTORY:
      return;
    default:
      return state;
  }
}
