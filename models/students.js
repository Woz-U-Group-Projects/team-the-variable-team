'use strict';
module.exports = (sequelize, DataTypes) => {
    const students = sequelize.define(
        'students',
        {
            StudentID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            FirstName: DataTypes.STRING,
            LastName: DataTypes.STRING,
            UserName: {
                type: DataTypes.STRING,
                unique: true
            },
            Email: {
                type: DataTypes.STRING,
                unique: true
            },
            Password: DataTypes.STRING,
            ConfirmPassword: DataTypes.STRING,
            ContactNum: DataTypes.STRING,
            CoursesCompletedAndCompleting: DataTypes.STRING,
            StudentPost: DataTypes.STRING,
            ResumeName: DataTypes.STRING
        }
    );
    return students;
};