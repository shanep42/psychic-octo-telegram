const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Role extends Model {}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        salary: {
            type: DataTypes.STRING
        },
        department_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'roles'
    }
);

module.exports = Role;