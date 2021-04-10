const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico')
})


app.listen(port, () => {
  console.log(`App listening at http://host:${port}`)
})
