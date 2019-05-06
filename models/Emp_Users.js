'use strict';
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
            Username: DataTypes.STRING,
            Password: DataTypes.STRING
        },
        {
            timestamps: false
        }
    );
    Emp_Users.associate = function(models) {

    };
    
    return Emp_Users;
};