var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
// find 
router.post('/finds', function (req, res, next) {
  mongoose.models[req.body.model].find().then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
// filter methods
router.post('/filter', function (req, res, next) {
  mongoose.models[req.body.model].find(req.body.filter).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
// InsertMany
router.post('/InsertMany', function (req, res, next) {
  mongoose.models[req.body.model].insertMany(req.body.filter).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
// Insert
router.post('/insertone', function (req, res, next) {
  mongoose.models[req.body.model].insertOne(req.body.filter).then((docs) => {
    res.send(docs)
    console.log(docs)
  }).catch((err) => {
    res.send(err)
  })
})
// delect 
router.delete('/Delet', function (req, res, next) {
  mongoose.models[req.body.model].findOneAndRemove(req.body.delect).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
//  findByIdAndUpdate
router.post('/findByIdAndUpdate', function (req, res, next) {
  mongoose.models[req.body.model].findByIdAndUpdate(req.body.update, { $set: { brand: "nahl" } }, { new: true }).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
//findOneAndUpdate
router.put('/findOneAndUpdate', function (req, res, next) {
  mongoose.models[req.body.model].findOneAndUpdate(req.body.update, { $set: { quntity: 10 } }).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
// findById
router.post('/findById', function (req, res, next) {
  mongoose.models[req.body.model].findById(req.body).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
// findOneAndDelete
router.patch('/findoneanddelete', function (req, res, next) {
  mongoose.models[req.body.model].findOneAndDelete(req.body.delect).then((docs) => {
    res.send(docs)
  }).catch((err) => {
    res.send(err)
  })
})
module.exports = router;
