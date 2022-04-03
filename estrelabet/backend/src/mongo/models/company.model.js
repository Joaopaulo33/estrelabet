const { Schema } = require('mongoose');

const company = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
});

module.exports = {
  company,
};
