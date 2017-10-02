const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const Client = require('ftp');

const ENV = process.env;
const BUILD_PATH = path.resolve(__dirname, `../${ENV.FTP_BUILD_PATH}`);
const TARGET_PATH = ENV.FTP_SERVER_PATH;
const USERNAME = ENV.FTP_USERNAME;
const PASSWORD = ENV.FTP_PASSWORD;
const HOST = ENV.FTP_SERVER_HOST;
const PORT = ENV.FTP_SERVER_PORT || 21;

const client = new Client();

const DeployFromPath = pathBase => {
  const fileList = fs.readdirSync(pathBase);

  fileList.forEach(fileName => {
    const filePath = path.resolve(pathBase, fileName);
    const isDirectory = fs.statSync(filePath).isDirectory();
    const relative = filePath.replace(BUILD_PATH, '');

    if (isDirectory) {
      client.mkdir(`${TARGET_PATH}${relative}`, true, err => {
        if (err) console.log(chalk.red('mkdir'));
        else DeployFromPath(filePath);
      });
    }
    else if (!filePath.endsWith('.map')) {
      client.put(filePath, `${TARGET_PATH}${relative}`, err => {
        if (err) console.log(chalk.red('put'));

        console.log(chalk.green('file uploaded'), relative);
      });
    }
  });

  client.end();
};

const CleanUpRemote = () => {
  client.list(TARGET_PATH, (err, list) => {
    if (err) console.log(chalk.red('error'), err);

    list.forEach(item => {
      const deletePath = `${TARGET_PATH}/${item.name}`;

      if (item.name[0] === '.') {
        return;
      }

      if (item.type === 'd') {
        client.rmdir(deletePath, true, err => {
          if (err) console.log(chalk.red('rmdir'), err);

          console.log(chalk.blue('dir removed'), deletePath);
        });
      }
      else if (item.type === '-') {
        client.delete(deletePath, err => {
          if (err) console.log(chalk.red('delete'), err);

          console.log(chalk.blue('file removed'), deletePath);
        });
      }
    });

    client.end();
    console.log(chalk.green('remote content deleted'));
  });
};

client.on('close', () => {
  console.log(chalk.blue('connection closed'));
});

client.on('ready', () => {
  console.log(chalk.blue('connection established'));

  if (process.argv.length > 2 && process.argv[2] === 'cleanup') {
    CleanUpRemote();
  }
  else {
    DeployFromPath(BUILD_PATH);
  }
});

client.connect({
  host: HOST,
  port: PORT,
  user: USERNAME,
  password: PASSWORD
});
