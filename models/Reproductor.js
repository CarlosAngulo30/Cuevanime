'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reproductor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reproductor.init({
    uri: DataTypes.STRING,
    nombreReproducto: DataTypes.STRING,
    idPelicula: DataTypes.DECIMAL,
    idAnime: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Reproductor',
  });
  return Reproductor;
};