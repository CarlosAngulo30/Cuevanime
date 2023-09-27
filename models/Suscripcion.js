'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Suscripcion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Suscripcion.hasOne(models.Usuario, { foreignKey: 'suscripcionId' });
        }
    }
    Suscripcion.init({
        tipo: DataTypes.STRING,
        costo: DataTypes.DECIMAL,
        duracion: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Suscripcion',
    });
    return Suscripcion;
};