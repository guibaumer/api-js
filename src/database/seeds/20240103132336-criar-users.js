const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Jack',
        email: 'teste4@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Abigail',
        email: 'teste5@gmail.com',
        password_hash: await bcryptjs.hash('123fdas456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Uncle',
        email: 'teste6@gmail.com',
        password_hash: await bcryptjs.hash('a123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down() {},
};
