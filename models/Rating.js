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
      Rating.belongsTo(models.Pelicula, { foreignKey: 'rating'});
      Rating.belongsTo(models.Anime, { foreignKey: 'rating'});
    }
  }
  Rating.init({
    calificacion: DataTypes.INTEGER,
    promedio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};