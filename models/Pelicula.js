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
      Pelicula.hasMany(models.Rating, {foreignKey:'idRating'})
    }
  }
  Pelicula.init({
    nombre: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    idRating: DataTypes.INTEGER,
    uri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};