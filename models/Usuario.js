'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasOne(models.Suscripcion,{foreignKey: 'idsuscripcion'})
    }
  }
  Usuario.init({
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    idsuscripcion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
}