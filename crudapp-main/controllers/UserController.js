const User = require('../models/UserModel');

// Create new user
exports.createUser = async (req, res) => {
	try {
		/**
		 * Get all parameters from body and create user
		 * Users can be created in two ways:
		 * 	1. new User() -> the instance method
		 * 	const { name, email, country } = req.body;
			const user = new User({name, email, country});
			await user.save();


		 * 	2. User.create() -> the direct method
		 */
		const { name, email, country } = req.body;
		const user = await User.create({ name, email, country });

		// Send JSON response back to the client
		res.status(201).json({
			message: 'successful',
			data: {
				user
			}
		});
	} catch (err) {
		res.status(400).json({
			message: err.message
		});
	}
};

// Read all users
exports.getUsers = async (req, res) => {
	// Read users based on filtering
	let queryObj = {};

	// Extract query parameters from the url
	let { name, email, country } = req.query;

	if (name) queryObj.name = name;
	if (email) queryObj.email = email;
	if (country) queryObj.country = country;

	const query = User.find(queryObj);

	try {
		const users = await query;

		// Send JSON response back to the client
		res.status(200).json({
			message: 'successful',
			data: {
				users
			}
		});
	} catch (err) {
		res.status(400).json({
			message: err.message
		});
	}
};

// Read single user
exports.getUser = async (req, res) => {
	try {
		// Get user ID
		const userId = req.params.id;

		// Fetch user from db and pass in the ID
		const user = await User.findById(userId);

		// Send JSON response back to the client
		res.status(200).json({
			message: 'successful',
			data: {
				user
			}
		});
	} catch (err) {
		res.status(404).json({
			message: `${err.kind} not found`
		});
	}
};

// Update single user
exports.updateUser = async (req, res) => {
	try {
		const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

		res.status(200).json({
			message: 'successful',
			data: {
				updateUser
			}
		});
	} catch (err) {
		res.status(404).json({
			message: `${err.kind} not found`
		});
	}
};

// Delete single user
exports.deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json({
			message: 'successful',
			data: null
		});
	} catch (err) {
		res.status(404).json({
			message: `${err.kind} not found`
		});
	}
};
