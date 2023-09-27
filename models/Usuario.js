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
            Usuario.belongsTo(models.Suscripcion, { foreignKey: 'idSuscripcion' });
            Usuario.hasMany(models.Pelicula, { foreignKey: 'peliculas' });
            Usuario.hasMany(models.Anime, { foreignKey: 'animes' });
        }
    }
    Usuario.init({
        nickname: DataTypes.STRING,
        password: DataTypes.STRING,
        idSuscripcion: DataTypes.INTEGER,
        peliculas: DataTypes.JSON,
        animes: DataTypes.JSON
    }, {
        sequelize,
        modelName: 'Usuario',
    });
    return Usuario;
};