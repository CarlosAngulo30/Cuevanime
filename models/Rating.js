'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rating.hasOne(models.Pelicula, { foreignKey: 'idPelicula'});
      Rating.hasOne(models.Anime, { foreignKey: 'idAnime'});
      Rating.hasOne(models.Usuario, { foreignKey: 'idUsuario'});
    }
  }
  Rating.init({
    calificacion: DataTypes.INTEGER,
    idAnime: DataTypes.INTEGER,
    idPelicula: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};