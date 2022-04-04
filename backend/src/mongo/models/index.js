const mongoose = require('mongoose');

const { collaborator } = require('./collaborator.model');
const { company } = require('./company.model');

module.exports = {
  CompanyModel: mongoose.model('companies', company),
  CollaboratorModel: mongoose.model('collaborators', collaborator),
};
