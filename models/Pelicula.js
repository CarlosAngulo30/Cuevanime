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
      Pelicula.belongsTo(models.Rating, {
        sourceKey: 'idRating', 
        foreignKey: 'idPelicula', 
      });
      Pelicula.belongsTo(models.Reproductor, { 
        foreignKey: 'idPelicula' });
    }
  }
  Pelicula.init({
    nombre: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    uri: DataTypes.STRING,
    calificacionPromedio: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};