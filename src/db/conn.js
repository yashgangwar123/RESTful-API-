let mongoose = require('mongoose');

// connect to database nd create a new database 
mongoose.connect("mongodb://localhost:27017/olympics",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then((res) => {
    console.log("Connected to database.....");
}).catch((err) => {
    console.log("Connection failed to connect to database...");
})
