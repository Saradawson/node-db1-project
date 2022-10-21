const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const { name, budget } = req.body
  if (name === undefined || budget === undefined){
    res.status(400).json({
      message: 'name and budget are required'
    })
  }else if (typeof name !== 'string'){
    res.status(400).json({
      message: 'name of account must be a string'
    })
  }else if (name.trim().length < 3 || name.trim().length > 100){
    res.status(400).json({
      message: 'name of account must be between 3 and 100'
    })
  }else if (typeof budget !== 'number' || isNaN(budget)){
    res.status(400).json({
      message: 'budget of account must be a number'
    })
  }else if (budget < 0 || budget > 100000000){
    res.status(400).json({
      message: 'budget of account is too large or too small'
    })
  }else{
    next()
  }
  }

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  next()
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    if(!account){
      res.status(404).json({
        message: 'Account with that id not found'
      })
    }else {
      req.account = account
      next()
    }
  }catch(err){
    next(err)
  }
}
