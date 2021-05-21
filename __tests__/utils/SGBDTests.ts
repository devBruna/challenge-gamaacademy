import { getConnection, EntityMetadata } from 'typeorm'

class SGBDTests {

    public async connect (): Promise<void> {
        await getConnection().connect()
    }

    public async closeConnection (): Promise<void> {
        await getConnection().close()
    }

    public async runMigrations (): Promise<void> {
        await getConnection().runMigrations()
    }

    public async synchronize (): Promise<void> {
        await getConnection().synchronize()
    }

    public async cleanDatabase (): Promise<void> {

        const entities: EntityMetadata[] = getConnection().entityMetadatas

        await Promise.all(entities.map( async (entity: EntityMetadata) => {
            await getConnection().query(`DELETE FROM ${entity.tableName}`)
        }))

    }
} 

export default new SGBDTests()