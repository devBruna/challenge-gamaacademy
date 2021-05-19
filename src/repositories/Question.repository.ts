import { EntityRepository, Repository, getRepository, Entity } from 'typeorm';

import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import { createTestQuestionInputs } from '../types/test.types'

@EntityRepository(TestQuestionsEntity)
class TestQuestionsRepository extends Repository<TestQuestionsEntity> {

    public async createTestQuestion(data: createTestQuestionInputs): Promise<TestQuestionsEntity> {
        try {
            return await getRepository(TestQuestionsEntity).save(data)
        } catch (err) {
            throw err.message
        }
    }

}

export default new TestQuestionsRepository()