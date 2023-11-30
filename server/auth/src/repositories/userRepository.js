const User = require("../models/user");

//this class holds the logic for the user repository
class UserRepository {
  async createUser(user) {
    return await User.create(user);
  }

  async getUserByUserEmail(email) {
    return await User.findOne({ email });
  }

  async getAUserById(id){
    return await User.findById(id);
  }

  async findAUserAndUpdateUser(id, update){
    return await User.findByIdAndUpdate(id, update);
  }
}

module.exports = UserRepository;
