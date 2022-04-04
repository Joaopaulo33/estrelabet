const {
  CollaboratorModel
} = require('../mongo/models');

async function getCompanyCollaborators(companyId) {
  const collaborators = await CollaboratorModel.find({
      companyId
    })
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
async function createCollaborator(collaboratorData) {

  const newCollaborator = {

    name: collaboratorData.name,
    cpf: collaboratorData.cpf,
    email: collaboratorData.email,
    telephone: collaboratorData.telephone,
    address: collaboratorData.address,
    companyId: collaboratorData.companyId

  };

  const collaborator = await CollaboratorModel(newCollaborator)
    .save()
    .catch((error) => {
      console.log(error);
      return null;
    });

  if (!collaborator) {
    console.log("Falha ao criar colaborador");
    return {
      code: 404,
      message: 'Collaborator not saved',
    };
  } else {
    console.log('Colaborador salva com sucesso');
    return {
      code: 201,
      message: 'Collaborator saved',
    }
  }

}
module.exports = {
  getCompanyCollaborators,
  getCollaborator,
  createCollaborator
};