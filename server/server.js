let express = require('express');
let bodyParser = require('body-parser')// goes with req.body ..DO NOT FORGET
let PORT = 5000;
let app = express();

app.use(express.static('server/public'));// get any request, static
app.use(bodyParser.urlencoded({ extended: true }));//is req.body




const restaurantRouter = require('./routes/restaurant.router');

app.use('/restaurant', restaurantRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});//end listen PORT