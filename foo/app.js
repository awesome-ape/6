const express = require('express');
const app = express();

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/login', function (req, res) {
  const user = req.query.username;
  const pass = req.query.password;
  if ((user == 'guest') && (pass == '1234'))
  res.end('Welcome guest');
else
  res.end('Wrong username or password');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://localhost:880');
});
