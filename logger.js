const winston = require("winston");
const consoleTransport = new winston.transports.Console();
const myWinstonOptions = {
  transports: [
    consoleTransport,
    new winston.transports.File({ filename: "app.log" }),
  ],
};

const logger = new winston.createLogger(myWinstonOptions);

module.exports = logger;
