import jwt from 'jsonwebtoken'
import db from '../config/index.js'

export class Controller {
  static getData(req, res) {
    db.query('SELECT * FROM users', (err, rows) => {
      if (err) {
        console.log(err)
      } else {
        res.send(rows)
      }
    })
  }

  static insertData(req, res) {
    const data = req.body
    jwt.sign({ data }, 'secretkey', { expiresIn: '15m' }, (_err, token) => {
      if (_err) {
        console.log(_err)
      } else {
        db.query('INSERT INTO users SET ?', [data], (err, rows) => {
          if (err) {
            console.log(err)
          }
        })
        res.json({ token })
      }
    })
  }
}
