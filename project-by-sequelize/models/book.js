module.exports = (sequelize, DataTypes) => {
    var Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        name: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        stock: DataTypes.INTEGER,
        auther: DataTypes.STRING,
        title: DataTypes.STRING,
        publisher: DataTypes.STRING,
        img: DataTypes.STRING,
    },{
        freezeTableName: true
    });
    return Book;
};
