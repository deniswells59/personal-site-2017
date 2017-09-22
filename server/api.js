import express from 'express';

const router = express.Router();

router.post('/send', (req, res) => {
  for (var key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      console.log(key, req.body[key]);
    }
  }
  res.end();
});

module.exports = router;
