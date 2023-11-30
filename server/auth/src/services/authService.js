const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/userRepository");
const config = require("../config");
const User = require("../models/user");


//the class below holds the business logic for authentication service that interacts with the userRepository
class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async findUserById(id) {
    const user = await this.userRepository.getAUserById(id);
    return user;
  }

  async findAUser(email) {
    const user = await this.userRepository.getUserByUserEmail(email);
    return user;
  }

  async login(email, password) {
    const user = await this.userRepository.getUserByUserEmail(email);

    if (!user) {
      return { success: false, message: "Invalid username or password" };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { success: false, message: "Invalid username or password" };
    }

    const token = jwt.sign({ id: user._id }, config.jwtSecret, {expiresIn:60*60*24*3});

    return { success: true, token, user };
  }

  async register(user) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    return await this.userRepository.createUser(user);
  }

  async deleteTestUsers() {
    // Delete all users with a username that starts with "test"
    await User.deleteMany({ email: /^test/ });
  }

  async findUserAndUpdate(id, update){
      return await this.userRepository.findAUserAndUpdateUser(id, update);
  }
}

module.exports = AuthService;
