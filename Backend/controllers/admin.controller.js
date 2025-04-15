import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateEmployeeId from "../utils/generateEmployeeId.js";
import generatePassword from "../utils/generatePassword.js";

export const registerAdmin = async (req, res) => {
  try {
    // Check if it's the first admin
    const existingAdmins = await User.find({ role: "admin" });

    if (existingAdmins.length > 0) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const { empId, name, password, email } = req.body;

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create admin user
    const newAdmin = new User({
      empId,
      name,
      password: hashedPassword,
      email,
      role: "admin",
    });

    await newAdmin.save();

    // Generate JWT token
    const token = jwt.sign({ _id: newAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send response
    res.status(201).json({
      message: "Admin registered successfully",
      data: {
        empId: newAdmin.empId,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering admin",
      error: error.message,
    });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { empId, password } = req.body;

    // Check if user exists with empId and is an admin
    const admin = await User.findOne({ empId, role: "admin" });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare the entered password with hashed password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set token in cookie (optional, can be used with frontend)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({
      message: "Admin logged in successfully",
      token,
      user: {
        empId: admin.empId,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in admin", error: error.message });
  }
};

export const logoutAdmin = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true, // set to true in production
      sameSite: "None", // adjust based on deployment
    });

    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error logging out",
      error: error.message,
      success: false,
    });
  }
};


export const registerEmployee = async (req, res) => {
  try {
    const { name, email, department } = req.body;

    if (!name || !email || !department) {
      return res.status(400).json({
        message: "Please provide name, email and department",
      });
    }

    // Generate ID and password
    const empId = await generateEmployeeId(department);
    const plainPassword = generatePassword(10);
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const newEmployee = new User({
      empId,
      name,
      email,
      department,
      password: hashedPassword,
      role: "employee",
    });

    await newEmployee.save();

    res.status(201).json({
      message: "Employee registered successfully",
      credentials: {
        empId,
        password: plainPassword,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while registering employee",
      error: error.message,
    });
  }
};
