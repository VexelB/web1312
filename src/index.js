const express = require('express');
const { get } = require('axios');

const PORT = 4321;
const app = express();
app
  .get(/hello/, r => r.res.end('Hello world!'))
  .get(/users/, async (r) => {
    const { data: { users: items } } = await get(URL);
    r.res.render('list', { title: 'Список логинов', items });
  })
  .use(r => r.res.status(404).end('Soryan ya ne tut'))
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
  .set('view engine', 'pug')
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
