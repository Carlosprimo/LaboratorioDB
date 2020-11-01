const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartSchema = new Schema(
	{
      name: String,
      infected: Number,
      deaths: Number,
      recovered: Number
	},
	{
		collection: 'departInfo',
	}
);

const Depart = mongoose.model('Depart', DepartSchema);
module.exports = Depart;