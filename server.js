const app = require('express')();
const server = require('http').Server(app);
const next = require('next');
const io = require('socket.io')(server);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// socket.io
io.on('connection', socket => {
  socket.on('message', data => {
    console.log(data);
  });
});

// slides
const db = {
  slides: [
    { name: '0x01_hello_world' },
    { name: '0x02_struct' },
    { name: '0x03_define' },
    { name: '0x04_call_by_reference' }
  ],
  current: 0
};

nextApp.prepare().then(() => {
  app.get(/api\/(.*)/, (req, res) => {
    const file = req.path.replace('/api/', '');
    switch (file) {
      case 'slides.json':
        res.json({ status: 200, slides: db.slides });
        return;
      case 'current.json':
        res.json({ status: 200, current: db.current, currentName: db.slides[db.current] });
        return;
      default:
        res.json({ status: 404 });
    }
  });

  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});