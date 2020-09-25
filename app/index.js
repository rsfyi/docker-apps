const app = require('express')();

app.get('/', (req, res) => {
  res.send(`appID: 2222 homepage says hello!`);
});

app.get('/app1', (req, res) => {
  res.send(`appID: 2222 app1 says hello!`);
});

app.get('/app2', (req, res) => {
  res.send(`appID: 2222 app2 says hello!`);
});

app.get('/admin', (req, res) => {
  res.send(`appID: 2222 admin very few people should see this!`);
});

app.listen(9999, () => console.log('Running at port 9999'));
