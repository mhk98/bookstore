import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { jwtHelpers } from './jwtHelpers';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).send({message:'You are not authorized'})

      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, process.env.TOKEN_SECRET as Secret);

      req.user = verifiedUser; // role  , userid
      console.log('user', verifiedUser);
      // role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        return res.status(httpStatus.FORBIDDEN).send({message:'Forbidden'})
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
