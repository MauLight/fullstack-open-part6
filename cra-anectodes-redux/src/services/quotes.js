import axios from 'axios'

const baseUrl = 'http://localhost:3002/quotes'

const getAll = async () => {
  const quotes = await axios.get(baseUrl)
  return quotes.data
}

const sendQuote = async (quote) => {
  const object = {
    quote,
    likes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateQuote = async (id, newObject) => {
  console.log(id)
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, sendQuote, updateQuote }