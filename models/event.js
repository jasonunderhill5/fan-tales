import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: {type: Schema.types.ObjectId, ref: 'Profile'},
  comments: [commentSchema]
})

const eventSchema = new Schema({

  event: String,
  venue: String,
  location: String,
  author: {type: Schema.types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Event = mongoose.model('Event', EventSchema)

export {
  Event
}