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

        }
    }
    Anime.init({
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        url: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Anime',
    });
    return Anime;
};