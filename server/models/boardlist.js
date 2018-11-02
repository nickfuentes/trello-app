'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardList = sequelize.define('BoardList', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  BoardList.associate = (models) => {
    BoardList.belongsTo(models.Board, {
      foreignKey: 'boardId',
      onDelete: 'CASCADE',
    });
  };

  return BoardList;
};