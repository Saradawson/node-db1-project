const db = require('../../data/db-config');


const getAll = () => {
  const results = db('accounts')
  return results
}

const getById = async id => {
  const [shipper] = await db('accounts').where('id', id)
  return shipper
}

const create = async account => {
  const [accountId] = await db('accounts').insert(account)
  const result = getById(accountId)
  return result
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
