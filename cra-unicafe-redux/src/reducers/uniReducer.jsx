

const initialState = {
  good: 0,
  bad: 0,
  neutral: 0,
  total: 0,
  average: 0,
  currAverage: 0,
  positive: 0
}

export const uniReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GOOD':
    return { ...state, good: state.good + 1 }
  case 'BAD':
    return { ...state, bad: state.bad + 1 }
  case 'NEUTRAL':
    return { ...state, neutral: state.neutral + 1 }
  default: return state
  case 'TOTAL':
    return { ...state, total: state.good + state.bad + state.neutral }
  case 'POSITIVE':
    return { ...state, positive: state.total === 0 ? 0 : (state.good / state.total) * 100 }
  case 'AVERAGE':
    return { ...state, average: state.total === 0 ? 0 : (state.good - state.bad) / state.total }
  }

}