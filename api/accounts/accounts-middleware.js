const db = require('../../data/db-config')

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

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  next()
}
