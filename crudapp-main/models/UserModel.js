const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		lowercase: true
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
		trim: true,
		lowercase: true
	},
	country: {
		type: String,
		require: [true, 'Country name is required'],
		lowercase: true
	}
});

// Create Name model
const User = mongoose.model('User', UserSchema);

module.exports = User;
