const  {log}  = require('console')
const os = require('os')

// info about current user
const user  = os.userInfo()
log(user)

// method return the system uptime in seconds
log(`The system uptime is ${os.uptime} seconds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/1024/1024/1024,
    freeMem: os.freemem()/1024/1024/1024
}
log(currentOS)