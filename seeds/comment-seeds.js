const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Awesome!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Nice!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Cool!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Teriffic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Amazing!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Spectacular!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Exquisite!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Exceptional!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;