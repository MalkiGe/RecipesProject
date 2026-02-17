const express = require('express')
const router = express.Router()
const {addRecipe, deleteRecipe, updateRecipe}= require ('../controller.recipeController')

router.post ('/add', addRecipe)
router.put ('/update', updateRecipe)
router.delete ('/delete', deleteRecipe)

module.exports = router