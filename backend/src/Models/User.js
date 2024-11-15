const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing

const userSchema = new mongoose.Schema({
  phoneNo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Add password here for authentication
  transactionHistory: [
    {
      transactionId: { type: String },
      amount: { type: Number },
      date: { type: Date },
      status: { type: String },
      description: { type: String }
    }
  ],
  userInfo: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },  // Reference to user info schema
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
