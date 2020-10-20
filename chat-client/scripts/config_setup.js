const fs = require('fs');
const path = require('path');

const _runmode = process.env.RUNMODE;
const _dockerhost = process.env.DOCKERHOST;

let host = 'localhost';
let port = '3030';

if (_runmode === 'pwd') {
    host = _dockerhost.replace('{PORT}', port);
    port = '';
}

const config = {
    HOST: host,
    PORT: port,
    RUNMODE: _runmode,
    DOCKERHOST: _dockerhost
};

fs.writeFileSync(path.join('src', 'assets', 'config.json'), JSON.stringify(config));