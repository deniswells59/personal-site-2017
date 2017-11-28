import express from 'express';
import request from 'request';
import postmark from 'postmark';

const router = express.Router();
const client = new postmark.Client(process.env.POSTMARK);


router.post('/send', (req, res) => {

  if(!req.body.gresponse) return res.status(400).send('No Bots Allowed');

  let key = process.env.GSECRET;
  let baseUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=';
  let url = `${baseUrl}${key}&response=${req.body.gresponse}&remoteip=${req.connection.remoteAddress}`;

  request(url, (error, response, body) => {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) return res.status(400).send('No Bots Allowed!');

    client.sendEmailWithTemplate({
      'From': 'me@deniswells.com',
      'To': 'deniswells59@gmail.com',
      'TemplateId': 3377063,
      'TemplateModel': {
        'name': req.body.name,
        'email': req.body.email,
        'phone': req.body.phone,
        'message': req.body.message
      }
    }, (err) => {
      if(err) return res.status(400).send(err);

      res.end();
    });
  });
});

module.exports = router;
