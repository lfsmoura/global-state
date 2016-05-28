# global-state

Make a distributed app or a game using Redux and socket.io. All state is kept in the server and all clients are always in sync. When an action is dispatched in a client, it first goes through the server and all clients receive it in the same order.

## Install

    npm install global-state

## Usage

### Server-side
With `hapi`:

```js
var io = require('socket.io')(server.listener);
require('global-state')(io);
```

### Client-side
Using `webpack`:

```js
import createGlobalStore from 'global-state-client';
import reducer from './myReducer.js'

var myStore = createGlobalStore({ room: 'myRoom', reducer }, () => 'Global state loaded!');
```
