import mongoose from 'mongoose'

export default mongoose.model('users', mongoose.Schema({
  avatar: String,
  accessToken: String,
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  status: String,
  solvedCards: [{type: mongoose.Schema.Types.Object, ref: 'Card'}],
  score: Number,
  isAdmin: Boolean,
  provider:String,
}))
