const fs = require('fs');
const path = require('path');

const _runmode = process.env.RUNMODE;
const _dockerhost = process.env.DOCKERHOST;

let api_host = 'localhost';
let api_port = '3030';

if (_runmode === 'pwd') {
    host = _dockerhost.replace('{PORT}', api_port);
    port = '';
}

const config = {
    API_HOST: api_host,
    API_PORT: api_port,
    RUNMODE: _runmode,
    DOCKERHOST: _dockerhost
};

fs.writeFileSync(path.join('src', 'assets', 'config.json'), JSON.stringify(config));