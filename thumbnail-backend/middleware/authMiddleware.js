import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  let token;


  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized ❌" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token provided ❌" });
  }
};

export default protect;
