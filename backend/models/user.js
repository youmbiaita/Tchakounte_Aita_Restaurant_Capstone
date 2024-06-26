const { Schema, model } = require('../config/db-connection.js');

//User schema
const userSchema = new Schema({
  userId: {
    type: String,
    required: true, 
    index: true
  },
  name: { 
    type: String,
    required: true, 
    index: true },
  email: { 
    type: String, 
    required: true, 
    unique: true }
});

module.exports = model('user', userSchema);
