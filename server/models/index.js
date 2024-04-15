const User = require('./user');
const Huddle = require('./Huddle');

//Huddle belongsTo User
Huddle.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

//User has many Huddles
User.hasMany(Huddle, {
    foreignKey: 'user_id'
})

module.exports = {
    User,
    Huddle
};