const { collaboratorService, companyService } = require('../services');

 async function getCompanyCollaborators(req, res) {
  const { companyId } = req.params;
  const company = await companyService.getCompany(companyId);
  if (company.code != 200) {
    res.status(company.code).send(company.message);
  } else {
    const collaborators =
      await collaboratorService.getCompanyCollaborators(companyId);
    res
      .status(collaborators.code)
      .send(collaborators.message || collaborators.data);
  }
}
async function getOneCollaborator(req, res) {
  const { collaboratorId } = req.params;
  const collaborator = await collaboratorService.getCollaborator(collaboratorId);
  res.status(collaborator.code).send(collaborator.message || collaborator.data);
}
async function createCollaborator(req, res) {}
async function editCollaborator(req, res) {}
async function deleteCollaborator(req, res) {}

module.exports = {
  getCompanyCollaborators,
  getOneCollaborator,
  createCollaborator,
  editCollaborator,
  deleteCollaborator,
};
