import chai, { expect } from 'chai'
import chaihttp from 'chai-http'

import TestServer from './utils/TestsServer'
import SGBDTests from './utils/SGBDTests'

chai.use(chaihttp)

const mockFullTestToInsert = {
    "title": "Prova de matemática",
    "questions": [
        {
            "title": "Resolva",
            "description": "4 + 4",
            "orderPosition": 1,
            "choices": [
                {
                    "text": "7",
                    "isCorrect": 0
                },
                {
                    "text": "8",
                    "isCorrect": 1
                },
                {
                    "text": "12",
                    "isCorrect": 0
                }
            ]
        },
        {
            "title": "Resolva",
            "description": "10 * 2",
            "orderPosition": 2,
            "choices": [
                {
                    "text": "10",
                    "isCorrect": 0
                },
                {
                    "text": "25",
                    "isCorrect": 0
                },
                {
                    "text": "20",
                    "isCorrect": 1
                }
            ]
        }
    ]
}

let id: number

describe('Test Route', async () => {

    after ( async () => {
        await SGBDTests.cleanDatabase()
        await SGBDTests.closeConnection() 
    })

    it('POST /test', (done: Mocha.Done) => {
        chai.request(TestServer.server)
        .post('/test')
        .set('content-type', 'application/json')
        .send(mockFullTestToInsert)
        .end((err, res) => { 
            id = res.body.data.id
            expect(res).to.have.status(201)
            expect(res.body).to.have.all.keys(['status', 'data'])
            expect(res.body.data).to.have.all.keys(['title', 'id', 'createdAt', 'updatedAt']) 
            done()
        })
    })

    it('GET /test', (done: Mocha.Done) => {
        console.log(`/test/${id}`)
        chai.request(TestServer.server)
        .get(`/test/${id}`)
        .set('content-type', 'application/json')
        .send(mockFullTestToInsert)
        .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.have.all.keys(['status', 'data'])
            expect(res.body.data).to.have.all.keys(['title', 'id', 'createdAt', 'updatedAt', 'questions']),
            expect(res.body.data.questions[0]).to.have.all.keys(['id', 'title', 'description', 'orderPosition', 'choices'])
            expect(res.body.data.questions[0].choices[0]).to.have.all.keys(['id', 'text', 'isCorrect'])
            done()
        })
    })

})