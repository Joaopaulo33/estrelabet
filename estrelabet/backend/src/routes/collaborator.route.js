const { Router } = require('express');
const { collaboratorController } = require('../controllers');

const router = Router();
router.get('/company/:companyId', collaboratorController.getCompanyCollaborators);
router.get('/:collaboratorId', collaboratorController.getOneCollaborator);
router.post('/', collaboratorController.createCollaborator);
router.put('/', collaboratorController.editCollaborator);
router.delete('/', collaboratorController.deleteCollaborator);

module.exports = {
  router,
};
