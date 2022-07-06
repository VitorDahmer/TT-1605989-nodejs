import  express  from "express";
import bodyParser from 'body-parser'
import con from "./conection.js";




const app = express()

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos por nome do diretório que será público
app.use(express.static('public') )

// Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get('/departamentos', (req,res)=>{
    // conecta no mysql com os dados do arquivo conection
   

    con.query('SELECT * FROM DEPARTAMENTOS', (err, result)=>{
        res.send(result)
    })

    
})

app.get('/funcionarios', (req, res)=>{
  

  con.query(`
  SELECT nome AS "Nome Completo", 
	CONCAT("R$ ",FORMAT(salario,2,"DE_DE")) AS Salário, 
    DATE_FORMAT(dt_nascimento, "%d/%m/%Y") AS "Data de Nascimento" FROM FUNCIONARIOS
    WHERE genero = "F"
		AND (nome LIKE "A%" OR nome LIKE"B%") AND (salario >= 2300.50 AND salario <= 3000)
	ORDER BY nome
    ;
  `, (err, result)=>{
    res.send(result)
  })
})

// app.get('departamentos/:idDepartamento', (req,res) => {
//     res.send('pega')
// })

app.get('/departamentos/:idDepartamento', (req, res) => {
  const { idDepartamento } = req.params

  // implemente uma query que retorne o departamente conforme ID passado na rota
  

  con.query(`SELECT * FROM DEPARTAMENTOS
  WHERE id_departamento = ${idDepartamento};`, (err, result)=>{
    res.send(result)
  })
   
  })

// Insere um departamento
app.post('/departamentos', (req, res)=>{
    console.log(req.body);
    const { nome, sigla } = req.body

    if (nome != undefined && sigla != undefined) {
        
      con.query(`INSERT INTO DEPARTAMENTOS (	nome, sigla) VALUES ("${nome}","${sigla}");`, (err, result)=>{
        res.send(result)
      })

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