'use strict'



const express = require('express')

const router = express.Router()

const municipios = require('../../controllers/municipios.controller')



router.get('/', municipios.get)

router.get('/id', municipios.getById)

router.post('/create', municipios.create)

router.put('/update', municipios.update)



module.exports = router;
