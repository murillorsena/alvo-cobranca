'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: "4ab1088d-33b6-46fd-8e88-f0924de23c00",
          name: "Murillo",
          email: "murillo@mail.com",
          password: "$2b$10$AcBrxdEvw8YWxSz0LdFQCe6TnN5jchbrZNu6.YaMXfEBxny.Vgvmm"
          // password: "$2b$10$3ViNimPsLW52u1E96YQfLe1qc.L7pwmmkwAoLNPPnK3e30K51xeka"
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null);
  }
};
