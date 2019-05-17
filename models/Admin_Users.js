'use strict';
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
    return Admin_Users;
};