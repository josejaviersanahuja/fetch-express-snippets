
// POST an application/json body
fetch(`${config.backendUrl}/api/v1/bolsas`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(res => console.log(res))
  .catch(err => console.error(err))



// EXPRESS CODE TO HANDLE THE REQUEST

const express = require('express');
const cors = require('cors');


app.use(cors());
app.use(express.json());

/** POST new bolsa */
router.post('/api/v1/bolsas', async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(204).json('ok');
  } catch (error) {
    console.log('error en get bolsasRouter', error);
    next(createHttpError(500, { zitrojj: 'Error desconocido' }));
  }
});
