
describe('question list component', () => {

  // runs once
  beforeAll(() => {
    console.log('before all')
  })

  // per test but after beforeAll
  beforeEach(() => {
    console.log('before each')
  })

  // runs once at very end
  afterAll(() => {
    console.log('after all')
  })

  // per test and before afterAll
  afterEach(() => {
    console.log('after each')
  })


  it('should display list of questions', () => {

  })

  it.skip('should test 2', () => {

  })

  it('should test 3', () => {

  })

})