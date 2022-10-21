const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  if(
    !req.body.name &&
    req.body.name.trim() || 
    !req.body.budget &&
    !req.body.budget.trim()){
      res.status(422).json({
        message: 'name and budget required'
      })
    }else{
      req.account = req.body
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
