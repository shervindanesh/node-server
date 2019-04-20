const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello NodeSchool!!!'))

app.listen(port, () => console.log(`Our app is listening on port ${port}!`))
