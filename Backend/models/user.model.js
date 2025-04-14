import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required : true
  },
  mobile: {
    type: String,
    trim: true
  },
  location: {
    type: String, 
    default: ''
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  profilePic: {
    type: String, 
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('user', userSchema);
export default User;
