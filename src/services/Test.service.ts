import { requestTestInputs, requestTestQuestionInput, requestQuestionChoiceInput } from '../types/test.types'
import { TestsEntity } from '../entities/Tests.entity'
import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import QuestionRepository from '../repositories/Question.repository'
import QuestionChoiceRepository from '../repositories/QuestionChoice.repository'
import TestRepository from '../repositories/Test.repository'

class TestService {

    public async createTest(data: requestTestInputs): Promise<any> {

        let newTest: TestsEntity

        try {
            newTest = await TestRepository.newTest({title: data.title})
        } catch (err) {
            throw err
        }

        const questions = data.questions as Array<requestTestQuestionInput>

        questions.forEach( async (question) => {

            let newQuestion: TestQuestionsEntity

            try {
                newQuestion = await QuestionRepository.newTestQuestion({
                    ...question, 
                    testId: newTest.id
                })
            } catch (err) {
                throw err
            }

            const choices = question.choices as Array<requestQuestionChoiceInput>

            choices.forEach( async (choice) => {

                let newChoice;

                try {
                    newChoice = await QuestionChoiceRepository.newQuestionChoice({
                        ...choice,
                        questionId: newQuestion.id
                    })
                } catch (err) {
                    throw err
                }
                
            });

        });

        return data
    }

}

export default new TestService()