const express = require('express')
const app = express()

fibonacci = (num) => {
    if (num === 0 || num === 1) {
        return num
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

app.get('/', (req, res) => {
    const result = fibonacci(7)
    return res.send(`Result = ${result}`)
})


app.listen(5050, () => console.log('Listening on port 5050'))
