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
            Usuario.belongsTo(models.Suscripcion, { foreignKey: 'suscripcionId' });
        }
    }
    Usuario.init({
        nickname: DataTypes.STRING,
        password: DataTypes.STRING,
        suscripcionId: DataTypes.INTEGER,
        peliculas: DataTypes.JSON,
        animes: DataTypes.JSON
    }, {
        sequelize,
        modelName: 'Usuario',
    });
    return Usuario;
};