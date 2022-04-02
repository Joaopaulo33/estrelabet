const mongoose = require('mongoose');

const { collaborator } = require('./collaborator.model');
const { company } = require('./company.model');

module.exports = {
  /* Modelo criado para manipular os dados dentro da collection categorias */
  CompanyModel: mongoose.model('companies', company),
  /* Modelo criado para manipular os dados dentro da collection postagens */
  CollaboratorModel: mongoose.model('collaborators', collaborator),
};
