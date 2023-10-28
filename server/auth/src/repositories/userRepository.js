const User = require("../models/user");

//this class holds the logic for the user repository
class UserRepository {
  async createUser(user) {
    return await User.create(user);
  }

  async getUserByUsername(email) {
    return await User.findOne({ email });
  }
}

module.exports = UserRepository;
