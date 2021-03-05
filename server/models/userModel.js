import mongoose from 'mongoose'


export default mongoose.model('user', mongoose.Schema({
  avatar: String,
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  status: String,
  toLearn: [{ type: mongoose.Types.ObjectId, ref: "card" }],
  score: Number,
  isAdmin: Boolean


}))