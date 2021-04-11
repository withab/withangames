const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.redirect('/blockgame')
})

app.get('/blockgame', (req, res) => {
  res.sendFile(__dirname + '/blockgame.html')
})

app.listen(port, () => {
  console.log(`App listening at http://host:${port}`)
})