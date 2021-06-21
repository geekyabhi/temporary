const router=require('express').Router()

const {addForms,getForms}=require('../controllers/userControllers')

router.route('/').post(addForms)
router.route('/').get(getForms)

module.exports=router