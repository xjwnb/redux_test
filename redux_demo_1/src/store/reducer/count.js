import { INCREMENT, DECREMENT } from "../action/actionTypes"

const initState = {
  count: 0,
  text: '小卡车'
}

export default (state = initState, actions) => {
  switch(actions.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
      
    default:
      return state
  }
}