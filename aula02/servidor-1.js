import {createServer} from 'http';
import currentDate from './currentDate.js';
import myName from './myName.js';

createServer((req, res)=>{
   // retorna código 200 => requisicao feita com sucesso
  // informa que o tipo de conteudo é html e usa utf-8
  res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});

  const horaAtual = currentDate()
  const hora = currentDate().getHours()
  const min = currentDate().getMinutes()
  const seg = currentDate().getSeconds()
  const horaFull = `${hora}:${min}:${seg}`

  const nome = myName()

  res.end(`${horaFull}<h1>${nome}</h1><h1>Isso é um servidor HTTP aula 02!</h1> ${horaAtual}`);
}).listen(3030, ()=>{
    console.log('Running server!');
})