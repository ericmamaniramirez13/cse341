
const routes=require('express').Router();

const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.eric);
routes.get('/kira', lesson1Controller.kira);

module.exports = routes;