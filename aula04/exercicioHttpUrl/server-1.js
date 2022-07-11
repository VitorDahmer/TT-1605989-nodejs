import { readFile } from 'fs';
import {createServer} from 'http';


createServer((req, res)=>{
  res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});

  switch (req.url) {
    case '/':
      // res.write('Bem vindo a Home!');
      readFile('index.html', 'utf-8', (err, data)=>{
        // console.log('lendo home', data);
        res.write(data)
        res.end()
      })
      break;
    case '/contato':
      // res.write('Contato');
      readFile('contato.html', 'utf-8', (err, data)=>{
        // console.log('lendo contato', data);
        res.write(data)
        res.end()
      })
      break
      
      case '/clientes':
        // res.write('Clientes');
        readFile('clientes.html', 'utf-8', (err, data)=>{
          // console.log('lendo clientes', data);
          res.write(data)
          res.end()
        })

        break
        
    default:
      // res.write('Home');
      readFile('index.html', 'utf-8', (err, data)=>{
        // console.log('lendo home', data);
        res.write(data)
        res.end()
      })
      
      break;
  }  

  // res.end()
}).listen(3030, ()=>{
    console.log('Running Server!');
})