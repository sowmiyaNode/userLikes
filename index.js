const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON body
app.listen(4000, ()=>{
    console.log("app is listening at 3000")
});

const auth = (req, res, next) => {
    if(req.headers.token) {
        if(req.headers.token) {
            return next();
        }
        else {
            return res.send({error: true, msg: 'token not valid'})
        }
    }
    return res.send({error: true, msg: 'token not present'})
}
app.get("/hello", (req, res)=> res.send("hello"));

require('./routes/studentRoutes')(app, auth);

