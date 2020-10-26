const fs = require('fs');
const path = require('path');

const _runmode = process.env.RUNMODE;
const _dockerhost = process.env.DOCKERHOST;
const _chatServer = process.env.CHAT_SERVER;
const _stsServer = process.env.STS_SERVER;
const _realm = process.env.REALM;
const _clientId = process.env.CLIENT_ID;
const _kcIdpHint = process.env.KC_IPD_HINT;
const _presReqConfId = process.env.PRES_REQ_CONF_ID;

let _host = 'localhost';
let _port = '3030';

if (_runmode === 'pwd') {
    host = _dockerhost.replace('{PORT}', _port);
    port = '';
}

const config = {
    HOST: _host,
    PORT: _port,
    RUNMODE: _runmode,
    DOCKERHOST: _dockerhost,
    CHAT_SERVER: _chatServer,
    STS_SERVER: _stsServer,
    REALM: _realm,
    CLIENT_ID: _clientId,
    KC_IPD_HINT: _kcIdpHint,
    PRES_REQ_CONF_ID: _presReqConfId
};

fs.writeFileSync(path.join('src', 'assets', 'config.json'), JSON.stringify(config));