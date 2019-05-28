import { Schema } from 'mongoose'

export default new Schema({
  title: String,
  content: String,
  date: Date,
  count: {
    type: Number,
    max: 10
  },
  keyMapTest: {
    type: Map,
    of: String
  }
})
