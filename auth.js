import jwt from 'jsonwebtoken';

import { config } from 'dotenv';

config();

const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    res.status(401);
  }

  jwt.verify(token, 'asd', (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next(); 
  });
};

export default authentication;
