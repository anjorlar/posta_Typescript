import * as express from "express"
import * as cors from "cors"
import * as helmet from "helmet"
import * as compression from "compression"
//connects to mongo db
require("./db/db")

//routes
import postRoute from "./routes/index"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())
app.use(compression())

app.use(postRoute)

// define a route handler for the default home page and calls base endpoint 
app.get('/', (req: any, res: any) => {
    res.status(200).send({
        HealthCheck: "OKAY",
        Message: 'Base route for Post Typescript up and running'
    })
})

export default app

