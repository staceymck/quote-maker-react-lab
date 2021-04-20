export default (state = [], action) => {
  let idx;
  let quote;

  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      console.log('re')
      const quotes = state.filter(q => q.id !== action.quoteId)
      return quotes
    case "UPVOTE_QUOTE":
      idx = state.findIndex(q => q.id === action.quoteId)
      quote = state[idx]
      return [
        ...state.slice(0, idx), 
        Object.assign({}, quote, {votes: quote.votes += 1}),
         ...state.slice(idx + 1)
      ]
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(q => q.id === action.quoteId)
      quote = state[idx]
      if (quote.votes !== 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, {votes: quote.votes -= 1}),
          ...state.slice(idx + 1)
        ]
      }
      return state
      
    default:
      return state
  }
}