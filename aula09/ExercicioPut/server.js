import  express  from "express";
import bodyParser from 'body-parser'
import con from "./conection.js";
import cors from 'cors';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';




const app = express()
app.use(cors())
const options = {
  definition: {
    info: {
      title: 'API Node JS', // (obrigatório)
      version: '1.0.0', // (obrigatório)
    },
  },
  // Path da aplicação principal (onde estão as rotas documentadas)
  apis: ['server.js'],
};
// Adicionamos o gerador de documentação em uma const
const swaggerSpec = swaggerJSDoc(options);

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos por nome do diretório que será público
app.use(express.static('public') )

// Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


/**
 * @swagger
 *
 * /departamentos:
 *   get:
 *     description: Lista todos departamentos
 *     produces:
 *       - text/html
 *     responses:
 *       200:
 *         description: Exibe todos departamentos em um vetor
 */
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
/**
 * @swagger
 *
 * /departamentos:
 *   post:
 *     description: Insere departamento
 *     produces:
 *       - text/json
  *     parameters:
 *       - name: sigla
 *         description: sigla do depto.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Insere um depto. no banco
 */
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
/**
 * @swagger
 *
 * /departamentos/idDepartamento:
 *   put:
 *     description: Altera os atributos existentes
 *     produces:
 *       - text/json
  *     parameters:
 *       - name: nome
 *         description: nome do depto.
 *         required: true
 *         type: string
 *       - name: sigla
 *         description: sigla do depto.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Alterado departamento
 */
app.put('/departamentos/:idDepartamento', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const {nome, sigla} = req.body
    const { idDepartamento } = req.params

    if (nome != undefined && sigla != undefined && idDepartamento != undefined) {
      con.query(`UPDATE DEPARTAMENTOS
      SET sigla = "${sigla}",
        nome = "${nome}"
      WHERE id_departamento = ${idDepartamento};`, (err, result)=>{
        res.send(result)
      })
    } else{
      res.send("Deu errado!")
    }
  })
    
// Altera parcialmente os dados de um departamento
app.patch('/departamentos/:idDepartamento', (req, res) => {
    res.send('Altera parcialmente um departamento.')
  })

// Deleta completamente um departamento
app.delete('/departamentos/:idDepartamento', (req, res) => {
    console.log(req.params);
    const {idDepartamento} = req.params

    con.query(`DELETE FROM DEPARTAMENTOS
    WHERE id_departamento = ${idDepartamento};`, (err, result)=>{
      
      res.send(result)
    })
  })



app.listen(3030, ()=> console.log('Running Server'))