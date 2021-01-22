import * as mongoose from "mongoose"
import settings from "../config/settings"


let connectionString: string = ''
process.env.NODE_ENV === 'test'
    ? (connectionString = settings.MONGODB.TESTDB)
    : (connectionString = settings.MONGODB.MONGOURL)
// console.log('connection string', connectionString)
mongoose.connect(connectionString, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res: any) => {
    console.log(`
            connected successfully with
            connectionString: ${res.connections[0]._connectionString}, 
            Name: ${res.connections[0].name},
            Host: ${res.connections[0].host},
            Port: ${res.connections[0].port},
`)
}).catch((error => {
    console.log(`error connecting`, error); process.exit(1);
}))

export default mongoose