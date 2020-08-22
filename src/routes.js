const routes = require('express').Router();
const transactionController = require('./app/controllers/transactionController');
const userController = require('./app/controllers/UserController');


//Rotas para transações
routes.post('/transaction', transactionController.store);
routes.get('/transaction', transactionController.index);
//rotas de usuários
routes.post('/user',  userController.store);
routes.get('/users',userController.index);


module.exports = routes;
