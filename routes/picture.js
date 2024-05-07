const express = require('express')
const router = express.Router() 
const upload = require('../config/multer.js')

const PictureController = require('../Controller/pictureController.js')

router.delete('/:id', PictureController.remove)
router.get('/', PictureController.findAll)
router.post('/', upload.single('file'),PictureController.create)


module.exports = router