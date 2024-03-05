module.exports = (sequelize,DataTypes) => {
    sequelize.define('User',{
        email : {
            type : DataTypes.string,
            unique : true
        },
        password : DataTypes.string
    })
}