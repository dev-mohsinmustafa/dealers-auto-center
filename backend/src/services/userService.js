const userRepository = require('../repositories/userRepository');
const CustomError = require('../utils/customError');
const statusCodes = require('../utils/statusCodes');

class UserService {
  async registerUser(userData) {
    // Check if user already exists
    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new CustomError('User with this email already exists', statusCodes.BAD_REQUEST);
    }

    // In a real application, hash password here
    const { password, ...userWithoutPassword } = userData;
    const savedUser = await userRepository.save({ ...userWithoutPassword, password }); // Still saving plain for mock, but omitted in response
    
    return {
      id: savedUser.id,
      fullName: savedUser.fullName,
      email: savedUser.email,
    };
  }

  async loginUser({ email, password }) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new CustomError('Invalid credentials', statusCodes.UNAUTHORIZED);
    }
    
    // Exact match for our mock password flow
    if (user.password !== password) {
      throw new CustomError('Invalid credentials', statusCodes.UNAUTHORIZED);
    }

    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    };
  }
}

module.exports = new UserService();
