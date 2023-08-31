const { HTTP_STATUS_NOT_FOUND } = require('http2').constants;

module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statuseCode = HTTP_STATUS_NOT_FOUND;
  }
};
