const express  = require('express');

const cors = require('cors')

// globalError
const globalError = require('./utils/globalError');

const app = express();

app.use(cors());


// configuracion para la aceptacion de res JSON

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// endpoints
// .....
app.use('/api/v1/users', require('./routers/user.router').userRouter)
// productos/api/v1/products
app.use('/products', require('./routers/productsRouters').productRouter)
// Seller
app.use('/api/v1/sellers', require('./routers/sellers.router').sellersRouter)

app.use(globalError)
module.exports = app