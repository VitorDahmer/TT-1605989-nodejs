import {createServer} from 'http';
import getClientsByCity from './clients.js';

createServer((req, res)=>{
  res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});

  const cidade = 'Porto Alegre'

  const clientsName = getClientsByCity(`${cidade}`)
  console.log(clientsName);

  res.write(`<h1>Clientes de ${cidade}</h1>`)

  // Retorna um arry
  getClientsByCity(`${cidade}`).map(client => {
    res.write(`Nome: ${client.name} - Cidade: ${client.city} <br>`)
  })

  res.end()
}).listen(3030, ()=>{
    console.log('Running Server!');
})