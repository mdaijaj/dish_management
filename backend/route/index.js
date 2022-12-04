const express= require('express')
const router=express()
const dish= require('../controller/index')

//routes for Dish crude
router.post('/adddish', dish.addDish)
router.get('/alldishs', dish.allDishs)
router.get('/dishdetails/:id', dish.dishDetails)
router.put('/updatedish/:id', dish.updateDish)
router.get('/searchdish', dish.searcDish)


module.exports = router;