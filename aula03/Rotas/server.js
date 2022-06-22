import {createServer} from 'http';


createServer((req, res)=>{
  res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});

  console.log(req.url);
  console.log('Entrou no server')
  // todas requisicoes que chegarem baterao no req.url (ex. /contato)
  if (req.url.indexOf('/contato') != -1) {
    console.log('Entrou no CONTATO')
    res.write('Contato do site')
  }

  if (req.url.indexOf('/clientes') != -1) {
    console.log('Entrou no CLIENTES')
    res.write('Clientes da empresa')
  }

  res.end()
}).listen(3030, ()=>{
    console.log('Running Server!');
})