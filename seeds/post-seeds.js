const { Post } = require('../models');

const postData = [
    {
        title: "Fortnite suck!",
        post_content: "This might be the worst game of all time!",
        user_id: 3
    },
    {
        title: "Elon buys Twitter.",
        post_content: "Just a matter of time before you guys have to pay $8 like me!",
        user_id: 1
    },
    {
        title: "New edition of Minecraft!",
        post_content: "There is a new edition of Minecraft!",
        user_id: 2

    },
    {
        title: "Rainbow 6 Servers down forever!",
        post_content: "I just can't believe this. Long live rook armor!",
        user_id: 5
    },
    {
        title: "Big Pharma to release new strain of covid.",
        post_content: "Oh brother, another freaking strain of disease. Just what this world needs.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;