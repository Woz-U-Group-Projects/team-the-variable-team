'use strict';
module.exports = (sequelize, DataTypes) => {
    const Std_JobPosts = sequelize.define(
        'Std_JobPosts',
        {
            StdJobID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            StdJobName: DataTypes.STRING,
            StdJobLocation: DataTypes.STRING,
            StdJobWebsite: DataTypes.STRING,
            StdJobContactNum: DataTypes.STRING,
            StdJobEmail: DataTypes.STRING,
            StdJobDescription: DataTypes.STRING,
            StdJobPostedDate: DataTypes.STRING,
            StdJobCreatedById: DataTypes.INTEGER,
        },
        {
            timestamps: false
        }
    );
    Std_JobPosts.associate = function (models) {
        // associations can be defined here
        Std_JobPosts.belongsTo(models.Std_Users, {
            foreignKey: 'StdJobCreatedById',
            as: 'StudentID'
        });
    }
    return Std_JobPosts;
};