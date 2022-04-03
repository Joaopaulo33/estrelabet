const { companyService } = require('../services');

function getAllCompanies(req, res) {
  // const companies = companyService.getAllCompanies();
  // console.log(companies.data);
  // res.status(companies.code).send(companies.message || companies.data);
  res.send('hello');
}
function getOneCompany(req, res) {
  const { companyId } = req.params;
  const companies = companyService.getCompany(companyId);
  res.status(companies.code).send(companies.message || companies.data);
}
function createCompany(req, res) {
  const newCompany = companyService.createCompany();
  console.log(newCompany.data);
  console.log(newCompany.code);
  console.log('criooou');
  //  res.status(newCompany.code).send(newCompany.message || newCompany.data);
}
function editCompany(req, res) {}
function deleteCompany(req, res) {}

module.exports = {
  getAllCompanies,
  getOneCompany,
  createCompany,
  editCompany,
  deleteCompany,
};
