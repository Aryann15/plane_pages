const express = require('express')

const router= express.Router()

router.get('/',(req,res) => {
    res.status(200).send("get")
})

router.post('/',(req,res) => {
    res.status(200).send("set")
})

router.put('/:id',(req,res) => {
    res.status(200).send(`update ${req.params.id}`)
})

router.delete('/:id',(req,res) => {
    res.status(200).send(`delete ${req.params.id}`)
})

module.exports = router