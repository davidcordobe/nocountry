const app = require('./app')

const connectDB = require('./utils/database.js')

require('dotenv').config()
/*
@param {},

return {}
*/
const startServer = () => { 

  const PORT = process.env.SERVER_PORT

  app.listen(PORT, () => {
    connectDB()
    console.log('Server is running on port ', PORT)
  })
}

startServer()
