const User = require('../models/User');

//Create a new user
module.exports.create = async(req, res) => {

    try {
        const { userId, name, email, password } = req.body;
        const user = new User ({ userId, name, email, password });
        await user.save();

        return res.send(user);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

};

// find user
module.exports.find = async (req, res) => {
    try {
    const { userId } = req.params;
    
    // req.params.userId가 있을 시 해당 유저 정보를 리턴한다.
    if (userId) {
    // userId가 일치하는 User 도큐먼트를 하나 찾는다.
    const user = await User.findOne({ userId });
    
    // 해당 유저 정보가 존재하지 않으면 404를 리턴한다.
    if (!user) return res.status(404).send("user not found");
    return res.send(user);
    }
    // req.params.userId가 없으면 모든 유저 정보를 리턴한다.
    const users = await User.find({});
    return res.send(users);
    } catch (err) {
    return res.status(500).send(err);
    }
};
