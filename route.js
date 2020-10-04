const express = require ("express")
const app = express()
const path = require ("path")
app.listen(3000, () => console.log("Server up"))
app.get('/', (req, res) => {
    let file = path.resolve('vistas/ml.html')
    res.sendFile(file)
})
app.get('/registro', (req, res) => {
    let file = path.resolve('vistas/registro.html')
    res.sendFile(file)
})
app.get('/ingreso', (req, res) => {
    let file = path.resolve('vistas/ingreso.html')
    res.sendFile(file)
})
app.get(`*`, (req, res) => {
    if (req.url.endsWith('.css')) {
        let file = path.resolve('public' + req.url)
        return res.sendFile(file)
    }

let images = ['jpg', 'jpeg', 'gif', 'png','svg']
let ext = req.url.split('.')[1]

if (images.includes(ext)) {
    let file = path.resolve('public' + req.url)
    return res.sendFile(file)
}} 
) 
