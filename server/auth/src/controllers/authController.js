const AuthService = require("../services/authService");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const ejs = require('ejs');
const path = require('path');
const {sendMail} = require('../utils/sendMail');
const bcrypt = require('bcrypt');



const period = 60 * 5;
//class that holds the logic for the authentication routes
class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async login(req, res) {
    const { email, password } = req.body;

    const result = await this.authService.login(email, password);

    if (result.success) {
      res.cookie('authToken', result.token, { maxAge: 1000 * 60 * 60 * 24 });
      res.json({ success: true, token: result.token, user: result.user });

    } else {
      res.status(400).json({ message: result.message });
    }
  }

  async register(req, res) {
    const user = req.body;

    try {
      const existingUser = await this.authService.findAUser(user.email);

      if (existingUser) {
        console.log("Email already taken")
        throw new Error("Email already taken");
      }

      const result = await this.authService.register(user);
      res.status(201).json({ success: true, result });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getProfile(req, res) {
    const userId = req.user.id;

    try {
      const user = await this.authService.findUserById(userId);
      res.json({ success: true, user });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async forgotPasswordByEmail(req, res) {
    try {
      const email  = req.body.email;
      const user = await this.authService.findAUser(email );
      if (user) {
        await jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: period }, async (err, token) => {
          if (err) {
            console.log(err);
          } else {
            const text = `http://localhost:5000/reset-password/${user._id}/${token}`;
            console.log(text);
            const subject = "Reset Password Link"

            const data = {
              user: {
                name: user.email
              },
              text
            };

            const html = await ejs.renderFile(path.join(__dirname, '../mails/resetPassword.ejs'), data);

            try {
              console.log(user.email)
              await sendMail({
                email: user.email,
                subject,
                template: "resetPassword.ejs",
                data,
              });
              res.status(201).json({
                success: true,
                message: `Please check your email: ${user.email} to activate your account`,
                resetPasswordLink: text
              })
            }
            catch (err) {
              console.log(err.message);
            };

          }
        })
      } else {
        throw new Error("this email does not exist");
      }
    } catch (error) {
      res.status(404).json({
        success: false,
        msg: error.message
      })
    }
  };

  async updatePassword(req, res) {
    try {
       const {id, token} = req.params;
       const {password} = req.body;
       jwt.verify(token, process.env.JWT_SECRET, {}, async(err, verified) => {
        if(err){
          console.log(err)
          throw new Error(err.message);
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await this.authService.findUserAndUpdate(id, {
          password: hashedPassword
        });
        
        res.status(202).json({
          success: true,
          user
        });

       })
    } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          msg: error.message
        })
    }
  };
}

module.exports = AuthController;
