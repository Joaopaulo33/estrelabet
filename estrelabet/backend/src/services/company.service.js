const { CompanyModel } = require('../mongo/models');

async function getAllCompanies() {
  const company = await CompanyModel.find({})
    .exec()
    .catch((err) => null);
  if (!company) {
    return {
      code: 404,
      message: 'Companies not found',
    };
  } else {
    return {
      code: 200,
      data: company,
    };
  }
}

async function getCompany(companyId) {
  const company = await CompanyModel.findById(companyId)
    .exec()
    .catch((err) => null);
  if (!company) {
    return {
      code: 404,
      message: 'Company not found',
    };
  } else {
    return {
      code: 200,
      data: company,
    };
  }
}
async function createCompany(req, res) {

  const newCompany = {

    name: req.body.name,
    cnpj: req.body.cnpj,
    email: req.body.email,
    telephone: req.body.telephone,
    address: req.body.address,

  };
  
  console.log("AAAAAAAAAAAAA",req.body.name);

  const company = await CompanyModel(newCompany)
    .save()
    .catch(() => null);

  if (!company) {
    
    console.log("Falha ao criar empresa");
     return {
      code: 404,
      message: 'Company not saved',
    };    
  } else {
    console.log('Empresa salva com sucesso');
    res.redirect('/');
  }
}

module.exports = {
  getAllCompanies,
  getCompany,
  createCompany
};
