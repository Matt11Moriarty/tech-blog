const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');


Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: user_id,
    onDelete: 'CASCADE'
})

module.exports = {
    Post,
    Commment,
    User
}