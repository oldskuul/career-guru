import express from "express";

const router = express.Router();
import bcrypt from "bcrypt";
import User from "../models/users.js";
import jwt from "jsonwebtoken";
import validator from "validator";

const adminKey = "bullet";

router.post("/", async (req, res) => {
  const { email, lastName, password, checkPsw, firstName } = req.body;
  const foundUser = await User.findOne({ email });
  try {
    if (foundUser) {
      res.json({ msg: "Такой пользователь уже существует" });
    } else if (validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0}) && password === checkPsw) {
      let user;
      const salt = await bcrypt.genSalt(10);
      const hashedPsw = await bcrypt.hash(password, salt);
      if (req.body.secretKey === adminKey) {
        user = new User({
          firstName: firstName.toLowerCase(),
          lastName: lastName.toLowerCase(),
          email: email.toLowerCase(),
          password: hashedPsw,
          status: "beginner",
          score: 0,
          isAdmin: true,
          solvedCards: [],
                    favoriteCards: []
        });
        await user.save();
      } else {
        user = new User({
          firstName: firstName.toLowerCase(),
          lastName: lastName.toLowerCase(),
          email: email.toLowerCase(),
          password: hashedPsw,
          status: "beginner",
          score: 0,
          isAdmin: false,
          solvedCards: [],
                    favoriteCards: []
        });
        await user.save();
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
        expiresIn: 60 * 60000,
      });

      delete user._doc.password;
      res.json({ user, token, success: true });
    } else if (
      !validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0})
    ) {
      res.json({
        msg:
          "Пароль должен содержать 8 символов, которые включают хотя бы 1 заглавную букву, 1 цифру и 1 спецсимвол.",
      });
    } else if (password !== checkPsw) {
      res.json({ msg: "Проверьте пароль" });
    }
  } catch (err) {
    res.json({ msg: err.msg });
  }
});

router.post("/checktoken", (req, res) => {
  const token = req.body.token;

  jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

export default router;
