const app = require('express')();

app.get('/', (req, res) => {
  res.send('hello from lightweight server of node js');
});

app.listen(9999, () => console.log('Running at port 9999'));
