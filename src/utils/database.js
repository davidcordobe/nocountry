const mongoose = require('mongoose');

require('dotenv').config();

// connect database
const connectDB = async() => {

  mongoose.set('strictQuery', false)

  const conexion = await mongoose.connect(process.env.DB_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

  }).then((res) => console.log('Conectado a la base de datos'))
    .catch(err => console.log('ERRRO EN LA BASE DE DATOS >>>>> ', err));
}


module.exports = connectDB;
