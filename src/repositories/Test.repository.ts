import { EntityRepository, Repository, getRepository} from 'typeorm';

import { TestsEntity } from '../entities/Tests.entity'
import { createTestInputs } from '../types/test.types'

@EntityRepository(TestsEntity)
class TestsRepository extends Repository<TestsEntity> {

    public async newQuestion(data: createTestInputs) {
        try {
            return await getRepository(TestsEntity).save(data)
        } catch (err) {
            throw err.message
        }
    }

}

export default new TestsRepository()
