require('dotenv').config();
const app = require('./server');
const mongoose = require('mongoose');

app.set('connection', process.env.PORT);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    console.log('Connected to database');

    app.listen(app.get('connection'), ()=>{
        console.log('server started...')
    });
}).catch((error)=>{
    console.log(error);
});
