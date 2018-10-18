import { handleFetchQuestion } from './fetch-question-saga.js'
import fetch from 'isomorphic-fetch'

describe('fetch question saga', () => {

  beforeAll(() => {
    fetch.__setValue([{ question_id: 42}])
  })

  // error without async around passed function
  // https://github.com/facebook/jest/issues/ 3123
  it('should fetch question saga', async () => {
    const gen = handleFetchQuestion( { question_id: 42} )
    const { value } = await gen.next()
    expect(value).toEqual([{ question_id: 42}])

  })

})