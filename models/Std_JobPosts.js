'use strict';
module.exports = (sequelize, DataTypes) => {
    const Std_JobPosts = sequelize.define(
        'Std_JobPosts',
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
    Std_JobPosts.associate = function (models) {
        // associations can be defined here
        Std_JobPosts.belongsTo(models.Std_Users, {
            foreignKey: 'JobCreatedById',
            as: 'StudentID'
        });
    }
    return Std_JobPosts;
};