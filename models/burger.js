module.exports = function(sequelize, DataTypes) {
    const Hamburger = sequelize.define("hamburgers", {
        name: DataTypes.INTEGER,
        isEaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Hamburger
}