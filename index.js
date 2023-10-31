const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Xin chào thế giới Việt Nam s!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})