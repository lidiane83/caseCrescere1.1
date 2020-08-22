const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

class UserController {
  // POST - CRIAR USUARIO
  async store(req, res) {
    const user = await userModel.create(req.body);
   
    user.pass = undefined;

    return res.status(201).json({ user });
  }

  // DELETE - DELETAR USUARIO
  async destroy(req, res) {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    return res.status(200).json({ msg: 'Usuário deletado com sucesso' });
  }

  // PUT - ATUALIZAR USUARIO
  async update(req, res) {
    const { id } = req.params;

    delete req.body.pass;

    const user = await userModel.findOneAndUpdate(id, req.body, {
      new: true,
    });

    user.pass = undefined;

    return res.json({ user });
  }

  
  async show(req, res) {
    const { id } = req.params;

    const user = await userModel.findById(id);
    return res.status(200).json({ user });
  }

  // GET com TODOS USUARIOS
  async index(req, res) {
    const users = await userModel.find();
    return res.status(200).json({ users });
  }

  
}

module.exports = new UserController();
