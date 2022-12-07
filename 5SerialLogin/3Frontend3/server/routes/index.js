import express from 'express'

import jwt from 'jsonwebtoken'

import { Controller } from '../controllers/'

const router = express.Router()

router.get('/login', Controller.getData)

router.post('/login', Controller.insertData)

router.post('/auth', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'Post published',
        authData,
      })
    }
  })
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')

    const bearerToken = bearer[1]

    req.token = bearerToken

    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = router
