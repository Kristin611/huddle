const { Model, DataTypes } = require('sequelize');
 const sequelize = require('../config/connection');

 class Huddle extends Model {}

 Huddle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        huddleText: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 300],
                    msg: "Text must be between 1 and 300 characters in length."
                }
            }
        },
        huddle_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'huddle',
    }
 );

 module.exports = Huddle;
