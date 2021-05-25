import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async authenticate(request, response) {
    const { email, password } = request.body;
    const userExists = await User.findOne({ where: { email } });

    if (!userExists) {
      return response.status(400).json({ message: 'User not exist.' });
    }

    const compare = await bcrypt.compare(password, userExists.password_hash);

    if (!compare) {
      return response.status(401).json({ message: 'Wrong Password' });
    }
    const token = jwt.sign({ id: userExists.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP,
    });

    return response.status(200).json({ token });
  }

  async register(request, response) {
    try {
      const { email } = request.body;

      const emailAlreadyExists = await User.findOne({ where: { email } });

      if (emailAlreadyExists) {
        throw new Error('Email already exists.');
      }

      const user = await User.create(request.body);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export default new SessionController();
