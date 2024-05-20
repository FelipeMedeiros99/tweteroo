import express, {json} from 'express'
import cors from 'cors'
import chalk from 'chalk'

let usuario = {}
let usuarios = []
let tweets = []

const app = express()
app.use(json())
app.use(cors())

app.get('/tweets', (req, res)=>{
    let ultimosTweets = tweets.slice(-10)
    ultimosTweets.reverse()
    res.send(ultimosTweets)
})


app.post('/tweets', (req, res)=>{
    let novoTweet = req.body
    let usuarioDoNovoTwitter = usuarios.find((usuario) => usuario.username === novoTweet.username)
    novoTweet.avatar =  usuarioDoNovoTwitter.avatar
    if(tweets.length < 11){
        tweets.push(novoTweet)
    }else{
        tweets.splice(0, 1)
        tweets.push(novoTweet)
    }
    res.send(tweets)
})


app.post('/sign-up', (req, res)=>{
    usuario = req.body
    usuarios.push(usuario)
    res.send(usuario)
})


app.listen(5000, console.log(chalk.green('servidor no ar...')))
