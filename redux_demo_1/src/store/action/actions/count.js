import { 
  INCREMENT,
  DECREMENT
} from '../actionTypes'

export const increCount = () => {
  return {
    type: INCREMENT
  }
}

export const decreCount = () => {
  return {
    type: DECREMENT
  }
}