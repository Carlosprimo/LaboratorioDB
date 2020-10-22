const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema(
	{
		person: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 5,
		},
	},
	{
		collection: 'personInfo',
	},
	{
		timestamps: true,
	}
);

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
