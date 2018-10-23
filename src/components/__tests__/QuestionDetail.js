import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail'

describe('question detail component', () => {
  describe('Container element', () => {
    describe('mapStateToProps', () => {

      it('should map state to props correctly', () => {
        const sampleQuestion = {
          question_id: 42,
          body: "blah blah blah"
        }
        const appState = {
          questions: [sampleQuestion]
        }
        const ownProps = {
          question_id: 42
        }
        const componentState = mapStateToProps(appState, ownProps)
        expect(componentState).toEqual(sampleQuestion)
        
      })
    })
  })










  it('should not regress', () => {

    
  })
})