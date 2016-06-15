var requiredParameter = () => { throw new Error('Missing parameter') };

module.exports = function setGlobalStore(io = requiredParameter(), { prefix = 'global' } = {}) {
  var state = [];

  io.on('connection', (socket) => {
    var room;
    socket.on(`${prefix}.join`, function (_room, cb) {
      room = _room;
      socket.join(room);
      state[room] = state[room] || {};
      return cb(state[room]);
    });

    socket.on(`${prefix}.action`, function (action) {
      socket.emit(`${prefix}.action`, action);
      socket.to(room).emit(`${prefix}.action`, action);
    });

    socket.on(`${prefix}.state`, function(newState) {
      state[room] = newState;
    });
  });
};
