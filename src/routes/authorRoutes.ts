import { Router } from 'express'
import { check } from 'express-validator'
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, getBooksByAuthor, updateAuthor } from '../controllers/authorController'
import auth from '../middlewares/auth'
import { ENUM_USER_ROLE } from '../enums/user'


const router = Router()

router.get('/authors', auth(ENUM_USER_ROLE.ADMIN), getAllAuthors)
router.get('/authors/:id', getAuthorById)
router.post(
  '/authors',
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('birthdate').isDate().withMessage('Birthdate must be a valid date'),
  ],
  createAuthor
)
router.put(
  '/authors/:id', 
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('birthdate').isDate().withMessage('Birthdate must be a valid date'),
  ],
  updateAuthor
)
router.delete('/authors/:id', deleteAuthor)
router.get('/authors/books/:id', getBooksByAuthor)

export default router
