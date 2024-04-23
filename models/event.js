import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
})

const eventSchema = new Schema({

  title: String,
  venue: String,
  location: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  comments: [commentSchema]
}, {
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema)

export {
  Event
}