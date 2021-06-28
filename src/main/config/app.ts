import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { setupRoutes } from '@config/routes'

const app = express()
app.use(cors()) 
app.use(helmet())
app.use(express.json())

setupRoutes(app)
export default app