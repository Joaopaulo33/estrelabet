const { companyService } = require('../services');

async function getAllCompanies(req, res) {
   const companies = await companyService.getAllCompanies();
  console.log(companies.data);
  
  res.status(companies.code).send(companies.message || companies.data);
}
async function getOneCompany(req, res) {
  const { companyId } = req.params;
  const companies = await companyService.getCompany(companyId);
  res.status(companies.code).send(companies.message || companies.data);
}
async function createCompany(req, res) {
  const newCompany = await companyService.createCompany(req.body);
  console.log(newCompany.data);
  console.log(newCompany.code);
  console.log('criooou');
  res.status(newCompany.code).send(newCompany.message || newCompany.data);
}
async function editCompany(req, res) {}
async function deleteCompany(req, res) {}

module.exports = {
  getAllCompanies,
  getOneCompany,
  createCompany,
  editCompany,
  deleteCompany,
};
