import { EntityRepository, Repository, getRepository} from 'typeorm';

import { TestsEntity } from '../entities/Tests.entity'
import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import { QuestionChoicesEntity } from '../entities/QuestionsChoices.entity'
import { createTestInputs } from '../types/test.types'

@EntityRepository(TestsEntity)
class TestsRepository extends Repository<TestsEntity> {

    public async createTest(data: createTestInputs): Promise<TestsEntity> {
        try {
            return await getRepository(TestsEntity).save(data)
        } catch (err) {
            throw err.message
        }
    }

    public async findFullTestById(Reqid: number): Promise<TestsEntity> {
        try {
            return await getRepository(TestsEntity).findOneOrFail({ relations: ['questions', 'questions.choices']})
        } catch (err) {
            throw err.message
        }
    }

}

export default new TestsRepository()
