'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      calificacion: {
        type: Sequelize.INTEGER
      },
      idAnime: {
        type: Sequelize.INTEGER,
        references:{
          model:'Animes',
          key:'id'
        }
      },
      idPelicula: {
        type: Sequelize.INTEGER,
        references:{
          model:'Peliculas',
          key:'id'
        }
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references:{
          model:'Usuarios',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ratings');
  }
};