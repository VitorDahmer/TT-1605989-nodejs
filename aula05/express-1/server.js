import  express  from "express";
import {readFile} from 'fs'

const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos por nome do diretório que será público
app.use(express.static('public') )

// Exemplo de rotas
app.get('/', (req, res)=> {
    readFile('index.html', 'utf-8', (err, data) => {
        res.send(data)
      })
    
})

app.get('/alunos', (req,res)=> {
    res.send('Oi Alunos')
})

// http://localhost:3030/alunos/99
app.get('/alunos/:id', (req,res)=>{
    res.send(req.params.id)
})

app.listen(3030, ()=> console.log('Running Server'))