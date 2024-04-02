import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  roles: {
    type: [{
      role: String,
      volunteersRequired: Number
    }],
    required: true
  },
  volunteers: {
    type: [{
      name: String,
      role: String
    }]
  }
}, {
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema)

export default Event;