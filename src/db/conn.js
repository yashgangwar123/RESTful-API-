let mongoose = require('mongoose');

// connect to database nd create a new database 
mongoose.connect("mongodb+srv://yashgangwar:Yash12345@cluster0.vo961.mongodb.net/Olympics?retryWrites=true&w=majority",
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
