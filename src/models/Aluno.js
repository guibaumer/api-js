import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      // email: {
      //   type: Sequelize.STRING,
      //   defaultValue: '',
      //   unique: {
      //     msg: 'Email já utilizado.',
      //   },
      //   validate: {
      //     isEmail: {
      //       msg: 'Email inválido.',
      //     },
      //   },
      // },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },
      // peso: {
      //   type: Sequelize.FLOAT,
      //   defaultValue: '',
      //   validate: {
      //     isFloat: {
      //       msg: 'Peso deve ser inteiro ou de ponto flutuante.',
      //     },
      //   },
      // },
      // altura: {
      //   type: Sequelize.STRING,
      //   defaultValue: '',
      //   validate: {
      //     isFloat: {
      //       msg: 'Altura deve ser inteiro ou de ponto flutuante.',
      //     },
      //   },
      // },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
