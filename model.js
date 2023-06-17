const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  triggerTime: {
    type: Date,
    required: true,
  },
});

const EventModel = (connection) => {
  return connection.model("Event", eventSchema);
};

module.exports = EventModel;
