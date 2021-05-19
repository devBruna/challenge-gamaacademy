import { requestTestInputs, requestTestQuestionInput, requestQuestionChoiceInput } from '../types/test.types'
import { TestsEntity } from '../entities/Tests.entity'
import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import { QuestionChoicesEntity } from '../entities/QuestionsChoices.entity'
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

        await this.createQuestions(data.questions as Array<requestTestQuestionInput>, newTest)

        return newTest
    }

    public async createQuestions(questions: Array<requestTestQuestionInput>, newTest: TestsEntity) {
        questions.forEach( async (question) => {

            let newQuestion: TestQuestionsEntity

            try {
                newQuestion = await QuestionRepository.newTestQuestion({
                    ...question, 
                    test: newTest
                })
            } catch (err) {
                throw err
            }

            await this.createQuestionChoices(question.choices as Array<requestQuestionChoiceInput>, newQuestion)

        });
    }

    public async createQuestionChoices(choices: Array<requestQuestionChoiceInput>, newQuestion: TestQuestionsEntity) {
        choices.forEach( async (choice) => {
            try {
                await QuestionChoiceRepository.newQuestionChoice({
                    ...choice,
                    question: newQuestion
                })
            } catch (err) {
                throw err
            }
        });
    }

    public async findTestById(id: number): Promise<any> {
        try {
            return await TestRepository.findFullTestById(id)
        } catch (err) {
            throw err
        }
    }

}

export default new TestService()