'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anime.init({
    nombre: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    idRating: DataTypes.INTEGER,
    calificacionPromedio: DataTypes.DECIMAL,
    temporada: DataTypes.STRING,
    numeroCapitulo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};