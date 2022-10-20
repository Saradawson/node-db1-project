const router = require('express').Router();
const Accounts = require('./accounts-model');
const md = require('./accounts-middleware');

router.get('/', (req, res, next) => {
  Accounts.getAll()
          .then(accounts => {
            res.json(accounts)
          })
          .catch(next);
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  Accounts.getById(req.params.id)
          .then(account => {
            res.json(account)
          })
          .catch(next)
})

router.post(
  '/',
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  async (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.create(req.body)
          .then(account => {
            res.json(account)
          })
          .catch(next)
})

router.put(
  '/:id', 
  md.checkAccountId,
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: 'something went wrong in accounts router'
  })
})

module.exports = router;
