'use strict';
module.exports = (sequelize, DataTypes) => {
    const Emp_JobPosts = sequelize.define(
        'Emp_JobPosts',
        {
            JobID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            JobName: DataTypes.STRING,
            JobLocation: DataTypes.STRING,
            JobWebsite: DataTypes.STRING,
            JobContactNum: DataTypes.STRING,
            JobEmail: DataTypes.STRING,
            JobDescription: DataTypes.STRING,
            JobPostedDate: DataTypes.DATE,
            JobCreatedById: DataTypes.INTEGER,
        },
        {
            timestamps: false
        }
    );
    Emp_JobPosts.associate = function (models) {
        // associations can be defined here
        Emp_JobPosts.belongsTo(models.Emp_Users, {
            foreignKey: 'JobCreatedById',
            as: 'ID'
        });
    }
    return Emp_JobPosts;
};