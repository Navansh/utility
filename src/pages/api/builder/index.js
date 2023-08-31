export default function handler(req, res) {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  switch (requestMethod) {
    case 'POST': {
      res.status(200).json({ message: `POST SUCCESSFULL` });
    }
    case 'GET': {
      res.status(200).json({ message: 'THIS WAS A GET CALL' });
    }
    default: {
      res.status(400).json({ error: 'Invalid Method Called' });
    }
  }
}
