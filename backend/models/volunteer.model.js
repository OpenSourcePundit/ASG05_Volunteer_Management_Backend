import mongoose from "mongoose"

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactInfo: {
    type: Number,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  areasOfInterest: {
    type: [String],
    required: true
  },
  volunteerHistory: {
    type: [String],
    required: true
  },
  assignedEvents: {
    type: [String],
    required: true
  }
}, {
  timestamps: true
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema)
export default Volunteer;