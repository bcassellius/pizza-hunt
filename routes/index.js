const router = require('express').Router();
// Import all of the API routes /api/index.js (index.js implied)
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// Add prefix `/api` to all api routes imported from 'api' directory
router.use('api', apiRoutes)
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
