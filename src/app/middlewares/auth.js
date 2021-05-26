import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      error: 'Token not provider',
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const { id } = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.userId = id;
  } catch (error) {
    return res.status(401).json({
      error: error.message,
    });
  }
  return next();
};
