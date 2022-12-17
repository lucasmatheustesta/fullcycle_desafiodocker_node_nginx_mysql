const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)


connection.connect(function(err) {
    if (err) throw err;
})


app.get('/', (req, res) => {
    const SQL = `INSERT INTO people(nome) values ('Lucas')`
    connection.query(SQL)
    res.send('<h1>Full Cycle</h1>')
})

app.get('/list', (req, res) => {
    connection.query("SELECT * FROM people", (err, result, fields) => {
        if(err) throw err;
        res.send(result)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

process.on('exit', function () {
    connection.end()
    console.log('About to exit.');
});