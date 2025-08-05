import jwt from "jsonwebtoken";

const generateToken = (userId, expiresIn = "7d") => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

export default generateToken;