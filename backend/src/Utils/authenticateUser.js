const jwt = require('jsonwebtoken');
const User = require('../Models/User');


const authenticateUser = async (req, res, next) => {
  try {
    // 1. Get the token from the Authorization header
   const cookies=req.cookies;
   const {token}=cookies // 'Bearer <token>'
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication token is required' });
    }

    // 2. Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // JWT_SECRET should be stored in your .env

    // 3. Check if the user exists with the decoded user ID
    const user = await User.findById(decoded.userId);  // Ensure `userId` was added to the token payload during login

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // 4. Attach the user to the request object
    req.user = user;  // Now `req.user` will contain the authenticated user data

    // 5. Call the next middleware
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token', error });
  }
};

module.exports = authenticateUser;
