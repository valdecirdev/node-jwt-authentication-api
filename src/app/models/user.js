const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: false,
    select: false,
  },
  confirmed: {
    type: Boolean,
    required: true,
    default: false,
  },
  confirmToken: {
    type: String,
    required: false,
  },
  passwordResetToken: {
    type: String,
    required: false,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    required: false,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.pre('save', async function (next) {
  if( this.password !== undefined ) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }

  next();
});

const User = model('User', UserSchema);

module.exports = User;