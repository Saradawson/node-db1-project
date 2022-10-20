const db = require('../../data/db-config');


const getAll = () => {
  const results = db('accounts')
  return results
}

const getById = id => {
  // DO YOUR MAGIC
  const shipper = db('accounts').where('id', id)
  return shipper
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
