'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reproductors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uri: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombreReproducto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idPelicula: {
        type: Sequelize.INTEGER,
        references:{
          model:'Peliculas',
          key:'id'
        }
      },
      idAnime: {
        type: Sequelize.INTEGER,
        references:{
          model:'Animes',
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
    await queryInterface.dropTable('Reproductors');
  }
};