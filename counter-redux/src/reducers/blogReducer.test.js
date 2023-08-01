import { blogReducer } from './blogReducer'
import deepFreeze from 'deep-freeze'

describe('blogReducer', () => {
  test('returns a new state with action NEW_BLOG', () => {
    const state = []
    const action = {
      type: 'NEW_BLOG',
      payload: {
        title: 'The ways in which you could be better than before',
        author: 'Mau_Light',
        url: 'www.something.com',
        likes: 99999,
        id: 'c3'
      }
    }

    deepFreeze(state)
    const newState = blogReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.payload)
  })
})