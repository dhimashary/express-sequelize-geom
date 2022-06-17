'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stores', [
      {
        name: 'Bus Leuwipinjang',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(107.59278847659893 -6.942981263106864)'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Durian Sultan',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(107.5904275402039 -6.9439994342171225)'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kantin Siantar',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(107.5925576773082 -6.940669415817259)'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'CNI Bandung',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(107.59422277037818 -6.937911900280693)'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stores', null, {});
  },
};
