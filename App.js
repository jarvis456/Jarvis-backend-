const express = require('express');
const agentRoutes = require('./routes/agentRoutes');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Montar rutas de agentes bajo /api
app.use('/api', agentRoutes);

// Puerto configurable (por defecto 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend de agentes iniciado en puerto ${PORT}`);
});
