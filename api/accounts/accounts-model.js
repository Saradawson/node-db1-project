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

const updateById = async (id, account) => {
  await db('accounts').update(account).where('id', id)
  const result = await getById(id)
  return result
}

const deleteById = id => {
  db('accounts').where('id')
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
