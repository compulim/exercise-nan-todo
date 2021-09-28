import bodyParser from 'body-parser';
import createExpress from 'express';
import random from 'math-random';

const { PORT = 3001 } = process.env;

const app = createExpress();

let items = [
  {
    toggled: true,
    id: '1',
    content: 'Buy eggs'
  },
  {
    id: '2',
    content: 'Buy milk'
  }
];

app.use(bodyParser.json());

app.get('/api/health.txt', (_, res) => {
  res.send('OK');
});

app.get('/api/item', (_, res) => {
  res.setHeader('content-type', 'application/json');
  res.send({ items });
});

app.post('/api/item', (req, res) => {
  const { content } = req.body;
  const id = random().toString(36).substr(2);

  items = [...items, { content, id }];

  res.send(JSON.stringify({ id, items }));
});

app.put('/api/item/:id/completed', (req, res) => {
  const { id } = req.params;
  const { toggled } = req.body;

  const item = items.find(item => item.id === id);

  if (!item) {
    return res.send(404);
  }

  items = items.map(item => (item.id === id ? { ...item, toggled } : item));

  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify({ items }));
});

app.delete('/api/item/:id', (req, res) => {
  const { id } = req.params;

  const item = items.find(item => item.id === id);

  if (!item) {
    return res.send(404);
  }

  items = items.filter(item => item.id !== id);

  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify({ items }));
});

app.listen(PORT, () => {
  console.log(`API server listening to port ${PORT}.`);
});
