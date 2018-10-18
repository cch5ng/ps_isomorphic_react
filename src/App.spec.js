  import { delay } from 'redux-saga';

  // async examples
  it('async using done', done => {
    // calls done() cb to let jasmine know async dependency completed
    setTimeout(done, 100)
  })

  // should review this
  it('async using promise', () => {
    return new Promise(
      resolve => setTimeout(resolve, 100)
    )
  })

  it('async using async function',
    // delay provided by saga
    async () => await delay(100)
  )
