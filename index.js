const moment = require("moment");
const connection = require("./db");
const logger = require("./logger");
const EventModel = require("./model")(connection);

class Events {
  // Register an event handler
  on(eventName, callback) {}

  // Trigger all callbacks associated
  // with a given eventName
  async trigger(eventName) {
    let timestamp = moment().toISOString();
    logger.info(`${eventName} ---> ${timestamp}`);

    await EventModel.insert({
      event: eventName,
      trigger: timestamp,
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  async off(eventName) {
    let timestamp = moment().toISOString();
    logger.info(`off ---> ${timestamp}`);
    await EventModel.insert({
      event: "off",
      trigger: moment().toISOString(),
    });
  }
}

module.exports = Events;
