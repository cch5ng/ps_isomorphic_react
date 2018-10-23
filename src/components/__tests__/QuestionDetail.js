import React from 'react';
import renderer from 'react-test-renderer';
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

  describe('Display element', () => {
    it('should not regress', () => {
      //{title,body,answer_count,tags}

      const tree = renderer.create(
        <QuestionDetailDisplay 
          title="haha!"
          body="blah blah"
          answer_count={3}
          tags={['hey', 'you']}
        />
      )
      expect(tree.toJSON()).toMatchSnapshot()
    })

  })

})