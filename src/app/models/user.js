const mongoose = require('../../config/db');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          pass: {
            type: String,
            required: true,
          },
          cellNumber: {
            type: Number,
            require: true,
          },
          cardNumber: {
              type: Number,
              require: true,
          },
          cpf: {
            type: Number,
            require: true,
          }
        },
        {
          timestamps: true,
        }
);
UserSchema.pre('save', async function (next) {
    const hashPass = await bcrypt.hash(this.pass, 10);
    this.pass = hashPass;
    next();
  });

const User = mongoose.model('User', UserSchema);
module.exports = User;