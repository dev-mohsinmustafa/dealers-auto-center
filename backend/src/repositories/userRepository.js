// Mock Database for Users
const users = [];

class UserRepository {
  async save(userData) {
    // Simulating async DB save
    const newUser = { id: users.length + 1, ...userData, createdAt: new Date() };
    users.push(newUser);
    return Promise.resolve(newUser);
  }

  async findByEmail(email) {
    const user = users.find((u) => u.email === email);
    return Promise.resolve(user || null);
  }
}

module.exports = new UserRepository();
