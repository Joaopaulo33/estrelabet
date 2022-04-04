const { Router } = require('express');
const { companyController } = require('../controllers');

const router = Router();

router.get('/', companyController.getAllCompanies);
router.get('/:companyId', companyController.getOneCompany);
router.post('/', companyController.createCompany);
router.put('/', companyController.editCompany);
router.delete('/', companyController.deleteCompany);

module.exports = {
  router,
};
