'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Board.associate = (models) => {
    Board.hasMany(models.BoardList, {
      foreignKey: 'boardId',
      as: 'boardLists',
    });
  };

  return Board;
};