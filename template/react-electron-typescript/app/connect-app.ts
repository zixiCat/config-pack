import net from 'net';
import childProcess from 'child_process';

// eslint-disable-next-line no-console
const log = console.log;

const port: number = process.env.PORT
  ? Number.parseInt(process.env.PORT, 10) - 100
  : 3000;

process.env.APP_START_URL = `http://localhost:3000`;

const client = new net.Socket();
let startedApp = false;

const tryConnection = () => {
  client.connect({ port }, () => {
    client.end();

    if (!startedApp) {
      startedApp = true;
      log('starting app');

      childProcess.exec(
        'nodemon --watch "build"  --exec "electron ./build/app/main.js" --inspect=5858',
        {
          windowsHide: true,
        }
      );
    }
  });
};

tryConnection();

client.on('error', () => {
  setTimeout(tryConnection, 10000);
});
