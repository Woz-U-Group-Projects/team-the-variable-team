'use strict';
const bcrypt = require("bcrypt");
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
            avatar: DataTypes.TEXT,
            Github: DataTypes.STRING,
            Linkedin: DataTypes.STRING,
            Facebook: DataTypes.STRING
        },
        {
            timestamps: false
        }
    );

    Std_Users.prototype.validPassword = function validPassword(Password) {
        return bcrypt.compare(Password, this.Password);
    }

    Std_Users.associate = function(models) {
        // associations can be defined here
        Std_Users.hasMany(models.Std_JobPosts, {
            as: 'jobPosts',
            foreignKey: 'StdJobCreatedById',
            sourceKey: 'StudentID'
        });
    };
    
    Std_Users.beforeCreate((user, options) => {
        return bcrypt.hash(user.Password, 10)
        .then(hash => {
            user.Password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
    });
    return Std_Users;
};
