import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import Book from '../models/Book'
import Author from '../models/Authors'
import catchAsync from '../../shared/catchAsync'
import sendResponse from '../../shared/sendResponse'
import httpStatus from 'http-status'



export const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const books = await Book.findAll({ include: ['author'] })

  if(!books){
    return res.send('Book info not found')
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully got all books',
    data: books,
  });
});


export const getBookById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  if(!id){
    return res.send('Book id not found')
  }
  const book = await Book.findByPk(req.params.id, { include: ['author'] })

  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully got single book',
    data: book,
  });
});



export const createBook = catchAsync(async (req: Request, res: Response) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  console.log(req.body);

  const result = await Book.create(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Created Successfully',
    data: result,
  });
});


export const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  if(!id){
    return res.send('Book id not found')
  }

  const result = await Book.update(data,{
    where:{id:id}
  } )
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully update Book',
    data: result,
  });
});


export const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  
  if(!id){
    return res.send('Book id not found')
  }

  const result = await Book.destroy({
    where:{id:id}
  } )
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successfully delete book',
    data: result,
  });
});

export const getBooksByAuthor = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  
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