import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginEmployee = async (req, res) => {
  try {
    const { empId, password } = req.body;

    // 🔎 Check if both fields are present
    if (!empId || !password) {
      return res.status(400).json({ message: "Please enter both empId and password" });
    }

    // 🔍 Find employee with that empId
    const employee = await User.findOne({ empId, role: "employee" });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // 🔐 Compare password
    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Generate JWT token
    const token = jwt.sign(
      { _id: employee._id, role: employee.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 🍪 Optional: Set token in cookie
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // 📤 Send response
    res.status(200).json({
      message: "Login successful",
      token,
      data: {
        name: employee.name,
        empId: employee.empId,
        email: employee.email,
        department: employee.department,
        role: employee.role,
      },
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};


export const logoutEmployee = async (req, res) => {
    try {
      // Clear the token cookie
      res.clearCookie("token");
  
      res.status(200).json({
        message: "Logout successful",
      });
  
    } catch (error) {
      res.status(500).json({
        message: "Logout failed",
        error: error.message,
      });
    }
  };
  