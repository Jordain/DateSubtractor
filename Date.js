const path = require('path')
const express = require('express')


console.log(__dirname)
console.log(__filename)

const port = process.env.PORT || 3000
//Port for heroku 
const app = express()
const publicDirectoryPath = path.join(__dirname, '/public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>Jordains Date Subtractor</h1>')
    
})

app.get('/rxr', (req, res) => {
    res.send('<h1>Jordains English Statements</h1>')

})

app.listen(port, () => {
    console.log('Server is up on port' + port)
})

//testing commit and then going back to a checkpoint