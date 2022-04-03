const { CollaboratorModel } = require('../mongo/models');

async function getCompanyCollaborators(companyId) {
  const collaborators = await CollaboratorModel.find({ companyId })
    .exec()
    .catch((err) => null);
  if (!collaborators) {
    return {
      code: 404,
      message: "Company's collaborators not found",
    };
  } else {
    return {
      code: 200,
      data: collaborators,
    };
  }
}

async function getCollaborator(collaboratorId) {
  const collaborator = await CollaboratorModel.findById(collaboratorId)
    .exec()
    .catch((err) => null);
  if (!collaborator) {
    return {
      code: 404,
      message: 'Caollaborator not found',
    };
  } else {
    return {
      code: 200,
      data: collaborator,
    };
  }
}

module.exports = {
  getCompanyCollaborators,
  getCollaborator,
};
