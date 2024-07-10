import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/Users';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';
import generateToken from '../../utils/jwt_token';


// export const register = async (req: Request, res: Response) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//     return res.status(400).json({ message: 'Please provide all required fields' });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const user = await User.create({ email, password: hashedPassword, role });
//     return res.status(201).json(user);
//   } catch (error) {
//     return res.status(500).json({ message: 'Error creating user', error });
//   }
// };


export const register = catchAsync(async(req:Request, res:Response)=>{

    const { email, password, role } = req.body;

    if (!email || !password || !role) {
            return res.status(400).send({ message: 'Please provide all required fields' });
          }
  const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, role });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ' Registration Successfull',
        data: user,
      });


})

// export const login = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Please provide all required fields' });
//   }

//   try {
//     const user = await User.findOne({ where: { email } });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, {
//       expiresIn: '1h',
//     });

//     return res.status(200).json({ token });
//   } catch (error) {
//     return res.status(500).json({ message: 'Error logging in', error });
//   }
// };

export const login = catchAsync(async(req:Request, res:Response)=>{

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'Please provide all required fields' });
      }
  
      const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const accessToken = generateToken(user);

    //set refresh token into cookie
    const cookieOptions = {
      secure: true,
      httpOnly: true,
    };
    res.cookie("accessToken", accessToken, cookieOptions);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ' Login Successfull',
       
      });


})
