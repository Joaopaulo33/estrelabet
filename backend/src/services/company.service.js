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
async function createCompany(companyData) {

  const newCompany = {

    name: companyData.name,
    cnpj: companyData.cnpj,
    email: companyData.email,
    telephone: companyData.telephone,
    address: companyData.address,

  };

  const company = await CompanyModel(newCompany)
    .save()
    .catch((error) =>{ console.log(error) ;
    return null;
    } );

  if (!company) {
    
    console.log("Falha ao criar empresa");
     return {
      code: 404,
      message: 'Company not saved',
    };    
  } else {
    console.log('Empresa salva com sucesso');
    return{
      code: 201,
      message: 'Company saved',}}
    
}

module.exports = {
  getAllCompanies,
  getCompany,
  createCompany
};
