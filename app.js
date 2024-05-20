import express, {json} from 'express'
import cors from 'cors'
import chalk from 'chalk'

let usuario = {}
let usuarios = []
let tweets = []

const app = express()
app.use(json())
app.use(cors())



app.post('/sign-up', (req, res)=>{
    usuario = req.body
    usuarios.push(usuario)
    res.send(usuario)
})


app.listen(5000, console.log(chalk.green('servidor no ar...')))
