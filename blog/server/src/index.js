const express = require('express');
const morgan = require('morgan');
const router = require('./routes')

const app = express();
const PORT = 3001;
//app config


router(app);

app.listen(PORT, () => {
    console.log('connect successfully')
})
module.exports = app