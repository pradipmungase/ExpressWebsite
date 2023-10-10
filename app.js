import express from 'express';
import router from './routes/web.js';
const app = express()
const port = 3000

//set template engine
app.set('view engine','ejs');

// load routes
app.use('/',router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})