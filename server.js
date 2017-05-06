const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// slides
const slides = [
  { name: '0x01_hello_world' },
  { name: '0x02_struct' },
  { name: '0x03_define' },
  { name: '0x04_call_by_reference' }
];

// host slide
let hostSlide = 0;

// socket.io server
io.on('connection', socket => {
  let cookies = {};

  // socket
  //   .handshake
  //   .headers
  //   .cookie
  //   .split(';')
  //   .map( cookie => {
  //       const cook = cookie.split('=');
  //       const ret = {};
  //       cookies[cook[0].trim()] = cook[1].trim(); 
  //   });

  socket.on('toAll', (data) => {
    // TODO
    // only to viewers
    socket.broadcast.emit('fromHost', data);
  });

  socket.on('toHost', (data) => {
    // TODO
    // only to host
  });
});

nextApp.prepare().then(() => {
  app.get('/api/slides.json', (req, res) => {
    res.json(slides);
  });

  app.get('/join', (req, res) => {
    res.cookie('role', 'viewer', { maxAge: 9000000, httpOnly: true });
    res.redirect(`/slides/${slides[hostSlide].name}`);
  });

  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});