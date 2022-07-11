import  express  from "express";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method
// import mockDepartamentos from './mock/departamentos.mock.json' assert{type: 'json'}



const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos por nome do diretório que será público
app.use(express.static('public') )

// Exemplo de rotas
app.get('/', (req, res)=> {
    res.send(`rota barra`)   
})

app.post('/', (req, res)=> {
    res.send(`feito via post`)   
})

app.get('/departamentos', (req,res)=>{
    // nock do resultado uma resposta fake para avaliar
    
    res.send(mockDepartamentos)
})

app.get('departamentos/:idDepartamento', (req,res)=>{
    
})

    




app.listen(3030, ()=> console.log('Running Server'))