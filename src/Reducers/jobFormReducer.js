export const jobFormReducer = (state = {}, action) => {
  switch(action.type) {
    case "SET_JOB_FORM":
      return {
        ...state,
        ...action.payload,
      }
    defaut:
      return state;
  }
}