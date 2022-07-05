import  express  from "express";
import bodyParser from 'body-parser'
import con from "./conection.js";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method
// import mockDepartamentos from './mock/departamentos.mock.json' assert{type: 'json'}



const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos por nome do diretório que será público
app.use(express.static('public') )

// Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get('/departamentos', (req,res)=>{
    // nock do resultado uma resposta fake para avaliar
    con.connect((err)=>{
        if (err) {
            throw err
        }
    })

    con.query('SELECT * FROM DEPARTAMENTOS', (err, result)=>{
        res.send(result)
    })

    
})

// app.get('departamentos/:idDepartamento', (req,res) => {
//     res.send('pega')
// })

app.get('/departamentos/:idDepartamento', (req, res) => {
    res.send('pega')
  })

// Insere um departamento
app.post('/departamentos', (req, res)=>{
    console.log(req.body);
    const { nome, sigla } = req.body

    if (nome != undefined && sigla != undefined) {
        res.send(`Insere departamento: ${nome} - ${sigla}`)
      } else {
        res.send('Algo deu errado')
      }
})

// Altera por completo os dados de um departamento
app.put('/departamentos/:idDepartamento', (req, res) => {
    res.send('Altera por completo um departamento.')
  })
    
// Altera parcialmente os dados de um departamento
app.patch('/departamentos/:idDepartamento', (req, res) => {
    res.send('Altera parcialmente um departamento.')
  })

// Deleta completamente um departamento
app.delete('/departamentos/:idDepartamento', (req, res) => {
    res.send('Deleta completalmente um departamento.')
  })



app.listen(3030, ()=> console.log('Running Server'))