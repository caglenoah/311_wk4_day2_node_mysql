const express = require("express");

const usersRouter = require('./routers/users');

const app = express();


app.use(express.json())

app.use(express.static('public'));

const port = process.env.PORT || 4001;

app.use('/users', usersRouter)

// app.get('/', (req, res) => {
//   res.send('Welcome to our server!')
// }) we dont need this because we have the html linked

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
