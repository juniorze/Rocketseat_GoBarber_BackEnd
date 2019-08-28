module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
         id: {
            type: Sequelize.INTEGER,
            allowNukll: false,
            autoIncrement: true,
            primaryKey: true,
         },
         name: {
            type: Sequelize.STRING,
            allowNukll: false,
         },
         email: {
            type: Sequelize.STRING,
            allowNukll: false,
            unique: true,
         },
         password_hash: {
            type: Sequelize.STRING,
            allowNukll: false,
         },
         provider: {
            type: Sequelize.BOOLEAN,
            defaultvalue: false,
            allowNukll: false,
         },
         create_at: {
            type: Sequelize.DATE,
            allowNukll: false,
         },
         update_at: {
            type: Sequelize.DATE,
            allowNukll: false,
         },
      });
   },

   down: queryInterface => {
      return queryInterface.dropTable('users');
   },
};
