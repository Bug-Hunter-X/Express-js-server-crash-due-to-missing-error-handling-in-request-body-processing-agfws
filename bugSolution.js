const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).send({ error: 'Name is required' });
  }
  const user = req.body;
  console.log(user.name);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));