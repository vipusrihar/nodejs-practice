import express from 'express'
import { MovieCreate, MovieDelete, MovieEdit, MovieView, MovieShow} from '../controllers/movies.controller.js'

const router =  express.Router()

// CRUD functionality of movies

// C- Creating movie
router.post('/',MovieCreate)

//R - Reading
router.get('/',MovieView)

// U - Updating
router.put('/:id',MovieEdit)

// D - Deleting
router.delete('/:id', MovieDelete)

router.get('/:id',MovieShow);

export default router;