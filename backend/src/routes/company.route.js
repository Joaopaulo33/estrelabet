const { Router } = require('express');
const { companyController } = require('../controllers');

const router = Router();

router.get('/createCompany', companyController.createCompany);
router.get('/', companyController.getAllCompanies);
router.get('/:companyId', companyController.getOneCompany);
router.post('/createCompany', companyController.createCompany);
router.put('/', companyController.editCompany);
router.delete('/', companyController.deleteCompany);

module.exports = {
  router,
};
