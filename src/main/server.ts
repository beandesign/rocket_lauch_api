import dotenv from 'dotenv'
import app from '@config/app'

dotenv.config()
const serverPort = process.env.PORT || 3001
app.listen(serverPort, () => console.log(`Server running at: http://localhost:${serverPort}`)) 