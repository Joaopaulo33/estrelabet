const { collaboratorService, companyService } = require('../services');

async function getCompanyCollaborators(req, res) {
  const { companyId } = req.params;
  const company = await companyService.getCompany(companyId);
  if (company.code != 200) {
    res.status(company.code).send(company.message);
  } else {
    const collaborators =
      collaboratorService.getCompanyCollaborators(companyId);
    res
      .status(collaborators.code)
      .send(collaborators.message || collaborators.data);
  }
}
function getOneCollaborator(req, res) {
  const { collaboratorId } = req.params;
  const collaborator = collaboratorService.getCollaborator(collaboratorId);
  res.status(collaborator.code).send(collaborator.message || collaborator.data);
}
function createCollaborator(req, res) {}
function editCollaborator(req, res) {}
function deleteCollaborator(req, res) {}

module.exports = {
  getCompanyCollaborators,
  getOneCollaborator,
  createCollaborator,
  editCollaborator,
  deleteCollaborator,
};
