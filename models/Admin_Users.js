'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    const Admin_Users = sequelize.define(
        'Admin_Users',
        {
            AdminID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            FirstName: DataTypes.STRING,
            LastName: DataTypes.STRING,
            Email: {
                type: DataTypes.STRING,
                unique: true
            },
            Username: {
                type: DataTypes.STRING,
                unique: true
            },
            Password: DataTypes.STRING 
        },
        {
            timestamps: false
        }
    );
    Admin_Users.prototype.validPassword = function validPassword(Password) {
        return bcrypt.compare(Password, this.Password);
    }
    Admin_Users.beforeCreate((user, options) => {
        return bcrypt.hash(user.Password, 10)
        .then(hash => {
            user.Password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
    });
    return Admin_Users;
};