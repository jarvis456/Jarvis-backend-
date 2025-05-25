const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

// Ruta para un solo agente
router.post('/agent', agentController.runAgent);

// Ruta para el modo comité/fusión (todos los agentes)
router.post('/committee', agentController.runCommittee);

module.exports = router;
