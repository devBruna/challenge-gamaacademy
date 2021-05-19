import { requestTestInputs, requestTestQuestionInputs, requestQuestionChoiceInputs } from '../types/test.types'
import { TestsEntity } from '../entities/Tests.entity'
import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import { QuestionChoicesEntity } from '../entities/QuestionsChoices.entity'
import QuestionRepository from '../repositories/Question.repository'
import QuestionChoiceRepository from '../repositories/QuestionChoice.repository'
import TestRepository from '../repositories/Test.repository'

class TestService {

    public async createNewFullTest(data: requestTestInputs): Promise<any> {

        let newTest: TestsEntity

        try {
            newTest = await TestRepository.createTest({title: data.title})
        } catch (err) {
            throw err
        }

        await this.createQuestions(data.questions as Array<requestTestQuestionInputs>, newTest)

        return newTest
    }

    public async createQuestions(questions: Array<requestTestQuestionInputs>, newTest: TestsEntity) {
        questions.forEach( async (question) => {

            let newQuestion: TestQuestionsEntity

            try {
                newQuestion = await QuestionRepository.createTestQuestion({
                    ...question, 
                    test: newTest
                })
            } catch (err) {
                throw err
            }

            await this.createQuestionChoices(question.choices as Array<requestQuestionChoiceInputs>, newQuestion)

        });
    }

    public async createQuestionChoices(choices: Array<requestQuestionChoiceInputs>, newQuestion: TestQuestionsEntity) {
        choices.forEach( async (choice) => {
            try {
                await QuestionChoiceRepository.createQuestionChoice({
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