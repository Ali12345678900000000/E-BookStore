import user from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    console.log("Request received:", req.body);
    const { fullname, email, password } = req.body;
    const User = await user.findOne({ email });
    if (User) {
      return res.status(400).json({ message: "user already exsists" });
    }

    const hashpassword = await bcryptjs.hash(password, 10);
    const createduser = new user({
      fullname: fullname,
      email: email,
      password: hashpassword,
    });
    await createduser.save();
    res.status(201).json({
      message: "user created successfully",
      user: {
        _id: createduser._id,
        fullname: createduser.fullname,
        email: createduser.email,
      },
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await user.findOne({ email });
    const ismatch = await bcryptjs.compare(password, User.password);
    if (!user || !ismatch) {
      return res.status(400).json({ message: "invalid username or password" });
    } else {
      return res.status(200).json({
        message: "login successful",
        user: {
          _id: User._id,
          fullname: User.fullname,
          email: User.email,
        },
      });
    }
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).json({ message: "inter server error" });
  }
};
