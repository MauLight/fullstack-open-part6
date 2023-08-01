import deepFreeze from 'deep-freeze'
import { uniReducer } from './uniReducer'

describe('unicafe Reducer', () => {

  const initialState = {
    good: 0,
    bad: 0,
    neutral: 0,
    total: 0,
    average: 0,
    currAverage: 0,
    positive: 0
  }

  test('returns proper initial statewhen called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = uniReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }

    const state = initialState

    deepFreeze(state)
    const newState = uniReducer(state, action)
    expect(newState.good).toEqual(1)
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }

    const state = initialState

    deepFreeze(state)
    const newState = uniReducer(state, action)
    expect(newState.bad).toEqual(1)
  })

  test('neutral is incremented', () => {
    const action = {
      type: 'NEUTRAL'
    }

    const state = initialState

    deepFreeze(state)
    const newState = uniReducer(state, action)
    expect(newState.neutral).toEqual(1)
  })
})