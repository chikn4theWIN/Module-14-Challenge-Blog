const { User } = require('../models');

const userData = [
    {
        username: "FortniteLover",
        twitter: "FortniteLover",
        github: "FortniteLover23",
        email: "FortniteLover@gmail.com",
        password: "password1!"
    },
    {
        username: "IHateTwitter",
        twitter: "IHateTwitter",
        github: "IHateTwitter",
        email: "IHateTwitterandElon@gmail.com",
        password: "password2!"
    },
    {
        username: "SugaSeanOMalley",
        twitter: "SugaSeanOMalley",
        github: "SugaSeanOMalley",
        email: "SugaSeanOMalleyUFC@gmail.com",
        password: "password3!"
    },
    {
        username: "Chuck_Norris",
        twitter: "Chuck_Norris",
        github: "Chuck_Norris",
        email: "Chuck_Norris69@gmail.com",
        password: "password4!"
    },
    {
        username: "PlayboiFarty",
        twitter: "PlayboiFarty",
        github: "PlayboiFarty",
        email: "PlayboiFartyVampAnthem@gmail.com",
        password: "password5!"
    },
    {
        username: "RookGreaterThanDoc",
        twitter: "RookGreaterThanDoc",
        github: "RookGreaterThanDoc",
        email: "DocLiterallyLikeBoys@gmail.com",
        password: "password6!"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;