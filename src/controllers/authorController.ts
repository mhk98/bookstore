import { Request, Response } from 'express'
import Author from '../models/Authors'
import catchAsync from '../../shared/catchAsync'
import sendResponse from '../../shared/sendResponse'
import httpStatus from 'http-status'
import { validationResult } from 'express-validator'



export const getAllAuthors = catchAsync(async (req: Request, res: Response) => {


  const authors = await Author.findAll({ include: ['books'] })

  if(!authors){
    return res.send('Author info not found')
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully got all authors',
    data: authors,
  });
});

export const getAuthorById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  if(!id){
    return res.send('Author id not found')
  }
  const author = await Author.findByPk(id, { include: ['books'] })
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully got single author',
    data: author,
  });
});


export const createAuthor = catchAsync(async (req: Request, res: Response) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  
  const {name, bio, birthdate} = req.body
  const result = await Author.create({
    name:name,
    bio:bio,
    birthdate:birthdate
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Author Created Successfully',
    data: result,
  });
});


export const updateAuthor = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  if(!id){
    return res.send('Author id not found')
  }

  const result = await Author.update(data,{
    where:{id:id}
  } )
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully update author',
    data: result,
  });
});



export const deleteAuthor = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  
  if(!id){
    return res.send('Author id not found')
  }

  const result = await Author.destroy({
    where:{id:id}
  } )
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully delete author',
    data: result,
  });
});


export const getBooksByAuthor = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  
  if(!id){
    return res.send('Author id not found')
  }

  const author = await Author.findByPk(id, { include: ['books'] })
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully got author books',
    data: author,
  });
});



