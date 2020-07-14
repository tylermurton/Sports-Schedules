module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('Games', {
    away: DataTypes.STRING,
    home: DataTypes.STRING,
    dateandtime: DataTypes.DATE,

  },{timestamps:false});
  return Games;
};
