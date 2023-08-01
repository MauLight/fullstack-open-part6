export const handleLikes = (id) => {

  return {
    type: 'ADD_LIKE',
    payload: { id }
  }
}

export const handleAdd = (quote) => {

  return {
    type: 'ADD_QUOTE',
    payload: { quote }
  }
}

export const updateFilterList = (list) => {

  return {
    type: 'UPDATE',
    payload: list
  }

}

export const updateFilter = (query) => {

  return {
    type: 'FILTER',
    payload: query
  }

}