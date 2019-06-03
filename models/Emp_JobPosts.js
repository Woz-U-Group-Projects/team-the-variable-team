'use strict';
module.exports = (sequelize, DataTypes) => {
    const Emp_JobPosts = sequelize.define(
        'Emp_JobPosts',
        {
            EmpJobID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            EmpJobName: DataTypes.STRING,
            EmpJobLocation: DataTypes.STRING,
            EmpJobWebsite: DataTypes.STRING,
            EmpJobContactNum: DataTypes.STRING,
            EmpJobEmail: DataTypes.STRING,
            EmpJobDescription: DataTypes.STRING,
            EmpJobPostedDate: DataTypes.DATE,
            EmpJobCreatedById: DataTypes.INTEGER,
        },
        {
            timestamps: false
        }
    );
    Emp_JobPosts.associate = function (models) {
        // associations can be defined here
        Emp_JobPosts.belongsTo(models.Emp_Users, {
            foreignKey: 'EmpJobCreatedById',
            as: 'creator'
        });
    }
    return Emp_JobPosts;
};