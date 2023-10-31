const AuthService = require("../services/authService");
const cookieParser = require('cookie-parser');

//class that holds the logic for the authentication routes
class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async login(req, res) {
    const { email, password } = req.body;

    const result = await this.authService.login(email, password);

    if (result.success) {
      res.cookie('authToken', result.token);
      res.json({ token: result.token });
      
    } else {
      res.status(400).json({ message: result.message });
    }
  }

  async register(req, res) {
    const user = req.body;
  
    try {
      const existingUser = await this.authService.findUserByUsername(user.email);
  
      if (existingUser) {
        console.log("Email already taken")
        throw new Error("Email already taken");
      }
  
      const result = await this.authService.register(user);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getProfile(req, res) {
    const userId = req.user.id;

    try {
      const user = await this.authService.getUserById(userId);
      res.json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = AuthController;
