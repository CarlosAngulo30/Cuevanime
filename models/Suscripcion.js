'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suscripcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Suscripcion.belongsTo(models.Usuario, { foreignKey: 'idsuscripcion' });
    }
  }
  Suscripcion.init({
    tipo: DataTypes.STRING,
    costo: DataTypes.DECIMAL,
    fechainicio: DataTypes.DATE,
    fechafin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Suscripcion',
  });
  return Suscripcion;
};