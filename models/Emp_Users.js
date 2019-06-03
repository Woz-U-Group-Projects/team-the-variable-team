'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Emp_Users = sequelize.define(
        'Emp_Users',
        {
            ID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            CompanyName: DataTypes.STRING,
            CompanyWeb: DataTypes.STRING,
            CompanyEmail: DataTypes.STRING,
            CompanyContact: DataTypes.STRING,
            CompContactNum: DataTypes.STRING,
            CompIndustry: DataTypes.STRING,
            Username: DataTypes.STRING,
            Password: DataTypes.STRING,
            avatar: DataTypes.TEXT
        },
        {
            timestamps: false,
            instanceMethods: {
                validPassword: (Password) => {
                    return bcrypt.compare(Password, this.Password);
                }
            }
        }
    );
    Emp_Users.prototype.validPassword = function validPassword(Password) {
        return bcrypt.compare(Password, this.Password);
    }
    Emp_Users.associate = function(models) {
        // associations can be defined here
        Emp_Users.hasMany(models.Emp_JobPosts, {
            as: 'jobPosts',
            foreignKey: 'EmpJobCreatedById',
            sourceKey: 'ID'
        });
    };
    Emp_Users.beforeCreate((user, options) => {
        return bcrypt.hash(user.Password, 10)
        .then(hash => {
            user.Password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
    });
    return Emp_Users;
};