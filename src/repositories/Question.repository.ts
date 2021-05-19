import { EntityRepository, Repository, getRepository, Entity } from 'typeorm';

import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import { createTestQuestionInput } from '../types/test.types'

@EntityRepository(TestQuestionsEntity)
class TestQuestionsRepository extends Repository<TestQuestionsEntity> {

    public async newTestQuestion(data: createTestQuestionInput) {
        try {
            return await getRepository(TestQuestionsEntity).save(data)
        } catch (err) {
            throw err.message
        }
    }

}

export default new TestQuestionsRepository()