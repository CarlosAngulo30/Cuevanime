'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pelicula.hasMany(models.Reproductor, { foreignKey: 'idPelicula' });
    }
    }
  Pelicula.init({
    nombre: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    calificacionPromedio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};