'use strict';
module.exports = (sequelize, DataTypes) => {
    const Std_Users = sequelize.define(
        'Std_Users',
        {
            StudentID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            FirstName: DataTypes.STRING,
            LastName: DataTypes.STRING,
            StdEmail: DataTypes.STRING,
            StdContactNum: DataTypes.STRING,
            ResumeOnFile: {
                type: DataTypes.BOOLEAN,
                default: false,
            },
            Major: DataTypes.STRING,
            CoursesEnrolled: DataTypes.STRING,
            CoursesCompleted: DataTypes.STRING,
            StdExperience: DataTypes.STRING,
            StdGPA: DataTypes.STRING,
            StdAwards: DataTypes.STRING,
            StdScholarships: DataTypes.STRING,
            StdSkills: DataTypes.STRING,
            Username: DataTypes.STRING,
            Password: DataTypes.STRING,
        },
        {
            timestamps: false
        }
    );
    return Std_Users;
};