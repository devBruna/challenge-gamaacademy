import Server from './App'

Server.listen(Server.get('port'), () => {
    console.log(`Sever online at PORT = ${Server.get('port')}`)
})