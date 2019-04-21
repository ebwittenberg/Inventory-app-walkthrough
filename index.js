const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({extended: false}));

const dashboardRouter = require('./routes/dashboard');


app.use('/', dashboardRouter);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});