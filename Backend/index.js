const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

const cors = require('cors')
const router = require('./Routes/router')

app.use(cors());
app.use(express.json());
app.use(router);

if(process.env.NODE_ENV==="production"){
  app.use(express.static('../Frontend/build'));
  app.get("*",(req, res) =>{
      res.sendFile('Frontend/build/index.html', { root: __dirname.slice(0, -7) });
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


