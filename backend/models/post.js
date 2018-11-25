import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Post = new Schema({
  _id: {
    type: Number
  },
  id: {
    type: Number
  },
  author: {
    type: String
  },
  text: {
    type: String
  },
  peopleId: {
    type: Number
  },
  status: {
    type: String
  }
});

// That Schema will mapping to MongoDB collections called post
export default mongoose.model('Post', Post);
