let express = require('express');
let bodyParser = require('body-parser')// goes with req.body ..DO NOT FORGET
let PORT = 5000;
let app = express();
app.use(express.static('server/public'));// get any reuqst, static
app.use(bodyParser.urlencoded({ extended: true }));






app.listen(PORT, () => {
    console.log('listening on port', PORT)
});//end listen PORT