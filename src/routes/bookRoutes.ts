import { Router } from 'express'
import { check } from 'express-validator'
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
  getBooksByAuthor,
} from '../controllers/bookController'

const router = Router()

router.get('/books', getAllBooks)
router.get('/books/:id', getBookById)
router.post(
  '/books',
  [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('published_date').isDate().withMessage('Published date must be a valid date'),
    check('author_id').isInt().withMessage('Author ID must be an integer'),
  ],
  createBook
)
router.put(
  '/books/:id',
  [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('published_date').isDate().withMessage('Published date must be a valid date'),
    check('author_id').isInt().withMessage('Author ID must be an integer'),
  ],
  updateBook
)
router.delete('/books/:id', deleteBook)
router.get('/books/author/:id', getBooksByAuthor)

export default router
