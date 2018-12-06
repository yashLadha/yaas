const express = require('express')
const router = express.Router()
const ShortURL = require('../Schema/ShortURL')

const shortid = require('shortid')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/**
 * Function for shortening of the URL
 * Takes the origURL parameter that contains the original URL.
 * Method: POST
 * {
 *   origURL: <original_url>
 * }
 * */
router.post('/short', (req, res, next) => {
  let originalURL = req.body.origURL
  return ShortURL.find({ origURL: originalURL }, (err, shorturl) => {
    if (err) {
      console.error(err.stack)
      res.status(500).send('Something broke!')
    } else if (shorturl.length > 0) return res.json(shorturl[0])
    else {
      while (true) {
        let urlFlag = true
        let generatedID = shortid.generate()
        ShortURL.find({ shortURLCode: generatedID }, (err, shorturl) => {
          if (shorturl) urlFlag = false
        })
        if (urlFlag) {
          ShortURL.create(
            {
              shortURLCode: generatedID,
              origURL: originalURL,
              doc: new Date().getDate(),
            },
            (err, instance) => {
              if (instance) {
                return res.json(instance)
              }
            }
          )
          break
        }
      }
    }
  })
})

/**
 * Method to redirect the URL (shortened) to the original URL.
 * It uses the shortcode that is passed in the URL for lookup and redirection
 */
router.get('/:code', (req, res, next) => {
  const urlcode = req.params.code
  return ShortURL.find({ shortURLCode: urlcode }, (err, shortURL) => {
    if (err) {
      console.error(err.stack)
      res.status(500).send('Something broke!')
    } else if (shortURL.length > 0) {
      res.redirect(shortURL[0].origURL)
    } else {
      res.json({ err: 'No such URL found' })
    }
  })
})

module.exports = router
