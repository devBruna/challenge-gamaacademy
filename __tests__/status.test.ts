import chai, { expect } from 'chai'
import chaihttp from 'chai-http'

import TestServer from './utils/TestsServer'

chai.use(chaihttp)

describe('Status Route', async () => {

    it('GET /status', (done: Mocha.Done) => {
        chai.request(TestServer.server)
        .get('/status')
        .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.have.all.keys(['status', 'data'])
            expect(res.body.data).to.have.all.keys(['hostname', 'path', 'method', 'ip', 'date', 'uptime']) 
            done()
        })
    })

})