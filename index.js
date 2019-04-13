const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('Hello from redhat-node-aws')
})

app.listen(3000, () => console.log('server listen on port 3000'))
