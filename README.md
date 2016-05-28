# global-state
Synchronize redux state with socket.io

## install

    npm install global-state

## usage
With `hapi`:

    var io = require('socket.io')(server.listener);
    require('global-state')(io);
