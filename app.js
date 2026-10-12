const { createServer } = require('http');
const next = require('next');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      handle(req, res);
    });

    server.listen(port, () => {
      console.log(`ZyncWeb Solutions is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start ZyncWeb Solutions:', error);
    process.exit(1);
  });
