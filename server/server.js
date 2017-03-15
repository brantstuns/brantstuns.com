'use strict';

module.exports = {
  getApp: function () {
    const express = require('express');
    const app = express();

    app.use(express.static('public'));
    app.get('/', (req, res) => res.sendFile('index.html'));

    return app;
  },
  start: function (port) {
    const app = this.getApp();
    app.listen(port, () => {
      console.log(`Server started on port ${port}!`);
    });
  }
};

