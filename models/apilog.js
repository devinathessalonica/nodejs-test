'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apilog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  apilog.init({
    params: DataTypes.STRING,
    endpoint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'apilog',
  });
  return apilog;
};